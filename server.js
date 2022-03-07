var User = require("./models/User");
create = () => {
    user= new User.User();
    user.id = 0;
    user.name = "Abhijit";
    user.email = "abhi@345";
    user.mobile_no = "9087564312";
    user.save();

}
create();




