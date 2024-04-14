var fs = require('fs');
var yaml = require('js-yaml');

let rawrepopath = "../../raw/";
let helpstr = `
today plan: node time init 1
day log mode: node time 20240414
diff day log mode: node time -1
today log mode: node time
`;
let today = datestr();

// read the arguments
var arguments = process.argv.splice(2);
if (arguments.length > 0) {
    if ((arguments.length == 2)&(arguments[0] == "init")){
        //today plan: node time init 1
        loadmetadata();
        makedayplan(today,arguments[1]);
    }else if ((arguments.length == 1)&(arguments[0].length == 8)) {
        //day log mode: node time 20240414
        startdate = arguments[0];
        enddate = arguments[0];
        loadmetadata();
        makedaylog(arguments[0]);
        showtables();
        //makeRfile();
    }else if ((arguments.length == 1)&(arguments[0].length != 8)&(!isNaN(arguments[0]))) {
        // diff day log mode: node time -1
        var diff = parseInt(arguments[0]);
        //console.log("diff day mode. diff="+diff);

        startdate = datestr(diff);
        enddate = datestr(diff);
        loadmetadata();
        makedaylog(datestr(diff));
        showtables();
        //makeRfile();
    }else{
        console.log(helpstr);
        process.exit();
    }
} else {
    // today log mode: node time
    startdate = datestr();
    enddate = datestr();
    loadmetadata();
    makedaylog(datestr());
    showtables();
    //makeRfile();
}

function makedayplan(date,plan){
    // read wake time from raw repo
    var rawhealthfilename = "health/d."+date+".yaml";
    var rawhealthfile = yaml.load(fs.readFileSync(rawrepopath + rawhealthfilename, 'utf8'));
    var waketime = rawhealthfile.wake.time;
    //console.log("wake time:"+waketime);

    var planobj = yaml.load(fs.readFileSync("plan.yaml", 'utf8'));
    var planstr = planobj.dayplan[plan].planstr

    var dayplan = "# "+date+"\n\n计划\n\n根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版"+plan+"。\n\n"+ planstr;
    var dayplanfilename = "time/d."+date+".md";
    //console.log("dayplan file name:\n"+dayplanfilename+"\ncontent:"+dayplan);
    fs.writeFileSync(dayplanfilename, dayplan);
}

function loadmetadata(){

}

function makedaylog(date){

}

function showtables(){

}



// utils
function datestr(diff=0) {
    var theDate = new Date();
    //theDate.setDate(theDate.getDate() - 1);
    theDate.setDate(theDate.getDate()+diff);

    var year = theDate.getFullYear();
    var month = theDate.getMonth() + 1 < 10 ? "0" + (theDate.getMonth() + 1) : theDate.getMonth() + 1;
    var day = theDate.getDate() < 10 ? "0" + theDate.getDate() : theDate.getDate();
    var dateStr = year + "" + month + "" + day;

    //console.log("datestr retrun:"+dateStr);
    return dateStr;
}