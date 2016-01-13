# react-demo
入门练习：
0) react＋webpack使用 
1) 体会前端组件化编程
### 运行环境
[path]：需要替换变量

nginx环境配置：
server {
    listen 9004;
    charset utf-8;
    root /Users/[User Name]/www/nodejs;
    server_name node.dev.com;
    location ~* \.(eot|otf|ttf|woff|svg)$ {
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Credentials' 'true';
        }
}

host 修改：
[Your IP] node.dev.com

运行命令：
git clone https://github.com/fanmzdj/react-demo.git
cd react-demo
npm install
webpack -w

访问：
http://node.dev.com:9004/react/view/menu.html
