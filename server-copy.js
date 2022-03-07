var mysqi = require("mysql");
var server = "localhost";
var username = "root";
var password = "";
var dbname = "node_crud";

function create(){
    var name = "samiksha";
    var email = "samikshap8217@gmail.com";
    var mobile_no = "7757958217"; 
    var query = "INSERT INTO users(name, email, mobile_no) ";
    query += "VALUES ('" + name + "','" + email + "','" + mobile_no + "')";

    var con = mysqi.createConnection({
        host : server,
        user : username,
        password : password,
        database : dbname

    });
    con.connect(function(err){
        if(err)
        {
            console.log("Error" + err);
            return;
        }
        con.query(query,function(err,result){
            if(err)
            {
                console.log("Error" + err);
                return;
            }
            console.log(result);
        })
    });
}

// create();

function update(){
    var name = "samiksha";
    var email = "samikshap8217@gmail.com";
    var mobile_no = "7757958217"; 
    var query = 'UPDATE users SET name= "' + name +'",email= "' + email +'",mobile_no= "' + mobile_no +'" WHERE id=1';
    // query += "VALUES ('" + name + "','" + email + "','" + mobile_no + "')";

    var con = mysqi.createConnection({
        host : server,
        user : username,
        password : password,
        database : dbname

    });
    con.connect(function(err){
        if(err)
        {
            console.log("Error" + err);
            return;
        }
        con.query(query,function(err,result){
            if(err)
            {
                console.log("Error" + err);
                return;
            }
            console.log(result);
        })
    });
}

// update();



function deletethis(){
    var name = "samiksha";
    var email = "samikshap8217@gmail.com";
    var mobile_no = "7757958217"; 
    var query = " DELETE FROM users WHERE id=2"
    // query += "VALUES ('" + name + "','" + email + "','" + mobile_no + "')";

    var con = mysqi.createConnection({
        host : server,
        user : username,
        password : password,
        database : dbname

    });
    con.connect(function(err){
        if(err)
        {
            console.log("Error" + err);
            return;
        }
        con.query(query,function(err,result){
            if(err)
            {
                console.log("Error" + err);
                return;
            }
            console.log(result);
        })
    });
}

// deletethis();

function read(){
    var name = "samiksha";
    var email = "samikshap8217@gmail.com";
    var mobile_no = "7757958217"; 
    var query = "SELECT * FROM `users` WHERE id=1"
    // query += "VALUES ('" + name + "','" + email + "','" + mobile_no + "')";

    var con = mysqi.createConnection({
        host : server,
        user : username,
        password : password,
        database : dbname

    });
    con.connect(function(err){
        if(err)
        {
            console.log("Error" + err);
            return;
        }
        con.query(query,function(err,result){
            if(err)
            {
                console.log("Error" + err);
                return;
            }
            console.log(result);
        })
    });
}

read();




