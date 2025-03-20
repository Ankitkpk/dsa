/* second highest salary in employee table */
select max(sal) from emp 
where salary not in(select max salary from emp);

/*display highest paid employee in each department */
