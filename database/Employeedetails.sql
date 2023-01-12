show databases;

create database employeeDB;
use employeeDB;
create table employeeDetails(Emp_id int(50), Emp_name varchar(100) , Mobile_no bigint(100), Address varchar(100));
show tables;

insert into employeeDetails values(101, "Simba" ,      9825170807 , "Marol"),
								  (101, "Abhishek" ,   9800070807 , "Vile Parle"),
								  (101, "Jahanvi" ,    9833348777 , "JB nagar"),
                                  (101, "Paxton" ,     9852660807 , "Andheri");
select * from employeeDetails;

update employeeDetails set Emp_id="102" where Emp_name="Abhishek" ;
update employeeDetails set Emp_id="103" where Emp_name="Jahanvi" ;
update employeeDetails set Emp_id="104" where Emp_name="Paxton" ;

delete from employeeDetails where Emp_name="Simba" ; 
