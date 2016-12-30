function aaa(){
      console.log("@@@@@@@@@@");
      var storage=window.localStorage;
       storage["a"]=1;   //写入a字段
       storage.b=2;   //写入b字段
       storage.setItem("c",3);   //写入c字段
       console.log(typeof storage["a"]);  //string
       console.log(typeof storage["b"]);  //string
       console.log(typeof storage["c"]);  //string
       /*localStorage的读取*/
      var a=storage.a;
       console.log(a);  //1
      var b=storage["b"];
       console.log(b);  //2
      var c=storage.getItem("c");
      console.log(c);//3
}

