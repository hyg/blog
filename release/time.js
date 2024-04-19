var fs = require('fs');
var yaml = require('js-yaml');

let gitpath = "../../";
let rawrepopath = "../../raw/";
let draftrepopath = "../../draft/";

let helpstr = `
node time:  today's draft metadata + draft markdown → day log markdown
node time 1: diff day's draft metadata + draft markdown → day log markdown
node time 20240417: 20240417's draft metadata + draft markdown → day log markdown
node time init 1: plan 1 metadata → today draft metadata
node time init: draft metadata + plan metadata → today plan markdown + draft markdown
`;
let today = datestr();

// read the arguments
var arguments = process.argv.splice(2);
if (arguments.length > 0) {
    if ((arguments.length == 1) & (arguments[0] == "init")) {
        // node time init: draft metadata + plan metadata → today plan markdown
        var date = datestr();
        makedayplan(date);
    } else if ((arguments.length == 2) & (arguments[0] == "init")) {
        // node time init 1: plan 1 metadata → today draft metadata
        var date = datestr();
        var plan = arguments[1];
        makedaydraft(date, plan)
    } else if ((arguments.length == 1) & (arguments[0].length == 8)) {
        //node time 20240417: 20240417's draft metadata + draft markdown → day log markdown
        var date = parseInt(arguments[0]).toString();
        makedaylog(date);
    } else if ((arguments.length == 1) & (arguments[0].length != 8) & (!isNaN(arguments[0]))) {
        //node time 1: diff day's draft metadata + draft markdown → day log markdown
        var diff = parseInt(arguments[0]);
        var date = datestr(diff);
        makedaylog(date);
    } else {
        console.log(helpstr);
        process.exit();
    }
} else {
    //node time:  today's draft metadata + draft markdown → day log markdown
    var date = datestr();
    makedaylog(date);
}

function makedaydraft(date, plan) {
    var planobj = yaml.load(fs.readFileSync("plan.yaml", 'utf8'));
    var time = planobj.dayplan[plan].time;

    var draftmetadata = new Object();
    var drafttimearray = new Array();
    //console.log(typeof(date));
    draftmetadata.date = parseInt(date);
    draftmetadata.plan = parseInt(plan);
    for (var i in time) {
        if (time[i].type == "work") {
            var timeperiod = new Object();
            timeperiod.begin = date + time[i].beginhour.toString().padStart(2, '0') + time[i].beginminute.toString().padStart(2, '0') + "00";
            timeperiod.amount = time[i].amount;
            timeperiod.type = "work";
            timeperiod.subject = "tbd";
            timeperiod.name = "tbd";
            timeperiod.output = "draft/" + date.slice(0, 4) + "/" + date.slice(4, 6) + "/" + timeperiod.begin + ".md";
            drafttimearray.push(timeperiod);
        }
    }
    draftmetadata.time = drafttimearray;

    var filename = draftrepopath + date.slice(0, 4) + "/" + date.slice(4, 6) + "/" + "d." + date + ".yaml";
    console.log(filename);
    console.log(yaml.dump(draftmetadata));
    fs.writeFileSync(filename, yaml.dump(draftmetadata));
}

function makedayplan(date) {
    //read wake time from raw repo
    //var rawhealthfilename = "health/d." + date + ".yaml";
    //var rawhealthfile = yaml.load(fs.readFileSync(rawrepopath + rawhealthfilename, 'utf8'));
    //var waketime = rawhealthfile.wake.time;
    //console.log("wake time:"+waketime);

    var draftmetafilename = draftrepopath + date.slice(0, 4) + "/" + date.slice(4, 6) + "/" + "d." + date + ".yaml";
    var draftmetadata ;
    try {
        if (fs.existsSync(draftmetafilename)){
            draftmetadata = yaml.load(fs.readFileSync(draftmetafilename, 'utf8'));
        }else{
            console.log("the log isn't exist:"+draftmetafilename);
            process.exit();
        }
    }catch (e) {
        // failure
        console.log("yaml read error！" + e);
        process.exit();
    }
    var plan = draftmetadata.plan;

    var planobj = yaml.load(fs.readFileSync("plan.yaml", 'utf8'));
    var planstr = planobj.dayplan[plan].planstr;
    var dayplan = "# " + date + "\n\n计划  \n\n根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版" + plan + "。\n\n" + planstr + "\n\n---\n\n";

    for (var i in draftmetadata.time) {
        var subject = draftmetadata.time[i].subject;
        var taskname = draftmetadata.time[i].name;
        if(taskname === undefined){
            taskname = "无名任务" ;
        }
        var output = draftmetadata.time[i].output;

        dayplan = dayplan + "- task:" + subject + "  [" + taskname + "](../" + gitpath + output + ")\n";

        var begintime = draftmetadata.time[i].begin ;
        var beginhour = parseInt((begintime-parseInt(begintime/1000000)*1000000)/10000);
        var beginminute = parseInt((begintime-parseInt(begintime/10000)*10000)/100);
        var amount = draftmetadata.time[i].amount;
        var endhour = beginhour+parseInt((beginminute+amount)/60) ;
        var endminute = (beginminute + amount)%60;
        //console.log(begintime,beginhour,beginminute,amount,endhour,endminute);
        var timestr = "## "+beginhour.toString().padStart(2,"0")+":"+beginminute.toString().padStart(2,"0")+" ~ "+endhour.toString().padStart(2,"0")+":"+endminute.toString().padStart(2,"0")+"\n\n"+taskname+"\n\n";

        var timeviewfilename = draftrepopath + date.slice(0, 4) + "/" + date.slice(4, 6) + "/" + begintime + ".md";
        console.log("time slice draft file name:"+timeviewfilename);
        console.log(timestr);
        fs.writeFileSync(timeviewfilename, timestr);
    }

    var dayplanfilename = "time/d." + date + ".md";
    console.log("dayplan file name:\n"+dayplanfilename+"\ncontent:\n"+dayplan);
    fs.writeFileSync(dayplanfilename, dayplan);
}

function makedaylog(date) {
    var year = date.slice(0, 4);
    var month = date.slice(4, 6);

    var draftmetafilename = draftrepopath + date.slice(0, 4) + "/" + date.slice(4, 6) + "/" + "d." + date + ".yaml";
    var draftmetadata ;
    try {
        if (fs.existsSync(draftmetafilename)){
            draftmetadata = yaml.load(fs.readFileSync(draftmetafilename, 'utf8'));
        }else{
            console.log("the log isn't exist:"+draftmetafilename);
            process.exit();
        }
    }catch (e) {
        // failure
        console.log("yaml read error！" + e);
        process.exit();
    }
    var daylog = "# " + date + "\n\n小结  \n\n<a id=\"top\"></a>\n";

    var plan = draftmetadata.plan;
    if (plan != null) {
        var planobj = yaml.load(fs.readFileSync("plan.yaml", 'utf8'));
        var planstr = planobj.dayplan[plan].planstr;

        daylog = daylog + "根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版" + plan + "。\n\n" + planstr ;
    } else {
        daylog = daylog + "当天未绑定时间模版"
    }
    var indexstr = "\n\n---\n<a id=\"index\"></a>\n";
    var logstr = "";
    for (t in draftmetadata.time) {
        var timelog = draftmetadata.time[t];
        //console.log(typeof(timelog.begin));
        var hour = timelog.begin.toString().slice(8, 10);
        var minute = timelog.begin.toString().slice(10, 12);
        var taskname = timelog.name ;
        //console.log(taskname);
        if(taskname === undefined){
            taskname = "无名任务" ;
        }

        indexstr = indexstr + "- " + hour + ":" + minute + "\t[" + taskname + "](#" + timelog.begin + ")  \n";

        var outputfilename = gitpath + timelog.output;
        var outputstr = fs.readFileSync(outputfilename, 'utf8')
        logstr = logstr + "\n\n[top](#top) | [index](#index)\n<a id=\"" + timelog.begin + "\"></a>\n" + outputstr;
    }

    var daylog = daylog + indexstr + "\n---\n" + logstr;
    //console.log(daylog);

    var daylogfilename = "time/d." + date + ".md";
    //console.log("daylog file name:\n" + daylogfilename + "\ncontent:\n" + daylog);
    fs.writeFileSync(daylogfilename, daylog);
}

// utils
function datestr(diff = 0) {
    var theDate = new Date();
    //theDate.setDate(theDate.getDate() - 1);
    theDate.setDate(theDate.getDate() + diff);

    var year = theDate.getFullYear();
    var month = theDate.getMonth() + 1 < 10 ? "0" + (theDate.getMonth() + 1) : theDate.getMonth() + 1;
    var day = theDate.getDate() < 10 ? "0" + theDate.getDate() : theDate.getDate();
    var dateStr = year + "" + month + "" + day;

    //console.log("datestr retrun:"+dateStr);
    return dateStr;
}