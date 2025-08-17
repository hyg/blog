# 2025.08.17.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20250817190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8956 | 4574 | 9690 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1460 | 1070 | 1455 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 90 | 910 | 660 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 4475 | -2475 | 4050 |
| js | 1000 | 496 | 504 | 1770 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：nextcloud
  - learn的第1号事项：LegalRuleML（Legal Rule Markup Language）
  - ego的第2号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：Tauri + Rust

- 60分钟时间片：
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：月度事务
  - raw的第2号事项：熟悉内脏之间的关系
  - xuemen的第2号事项：根据最新政策文件，考虑AER、AVR文件升级。

- 90分钟时间片：
  - infra的第1号事项：schema立项。
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第3号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第2号事项：Rete/Phreak算法的自主实现
  - xuemen的第3号事项：kernel模型升级
  - xuemen的第5号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.17.[无名任务]任务&body=日期: 2025.08.17.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250817.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250817190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

### debian

- 把开发pc上的ubuntu改为debian。
```
su
sudo usermod -aG sudo huangyg
sudo nano /etc/sudoers
- add "huangyg ALL=(ALL:ALL) ALL" after "%sudo ALL=(ALL:ALL) ALL"
exit
sudo apt install ntpsec
sudo nano /etc/ntp.conf
#server cn.ntp.org.cn
#server 0.cn.pool.ntp.org
#server 1.cn.pool.ntp.org
#server 2.cn.pool.ntp.org
#server 3.cn.pool.ntp.org
sudo ntpd -gq

# 在设置->键盘可以选择拼音输入法，从首选项->关于看是IBus的。
sudo apt install --no-install-recommends fcitx5 fcitx5-chinese-addons fcitx5-frontend-gtk3 fcitx5-frontend-qt5 fcitx5-module-xorg kde-config-fcitx5 im-config fcitx5-rime

sudo apt install curl
sudo curl -f https://zed.dev/install.sh | sh
~/.local/bin/zed ~/.bashrc
# 最后一行添加："PATH = $PATH:~/.local/bin"

sudo apt install git
git config --global user.name "Huang Yonggang"
git config --global user.email huangyg@xuemen.com
ssh-keygen -t rsa -b 8192 -C "huangyg@xuemen.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa # 添加到各git host

sudo apt install libreoffice
sudo apt install nodejs
# curl -fsSL https://ollama.com/install.sh | sh
# curl -fsSL https://get.docker.com -o get-docker.sh | sudo sh get-docker.sh
# https://docs.docker.com/engine/install/debian/
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done
# Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.conf <<EOF
{
    "registry-mirrors": [
        "https://docker.xuanyuan.me"
    ]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
sudo docker run hello-world
sudo docker run docker.xuanyuan.me/hello-world

# https://tixati.com/linux，选择64位下载，安装。
sudo apt install openttd
sudo apt install vlc
```

### IM

- matrix:寻找开放注册API的服务器，没有成功。还是需要手工注册。
- gitter.im 有外链语法：https://gitter.im/martynsmith/node-irc  也是需要注册登录
- irc：也需要创建账号之后使用，并不能随意在api中使用生成的nickname。
