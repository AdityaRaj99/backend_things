const pgconfig={
    HOST:"localhost",
    PORT:"5432",
    DB:"tutorial",
    USERNAME:"postgres",
    PASSWORD:"aditya@123",
    DIALECT:"postgres",
    pool:{
        max:5,
        min:0,
        acquire:30000, //max-time 30sec
        idle:10000 //connection will be cut after 10sec
    }
}
export default pgconfig;