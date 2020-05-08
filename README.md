# # Project Overview
 Create, Read, Update and Delete the EXD Trader records
  
  
  Technologies:<br/>
  Front-end------>React JS<br/>
  Back-end-------->Express JS<br/>
  Database-------> MongoDB<br/>
  
  Repositories:<br/>
  Front-end repository: https://github.com/AlexanderChene/EXD_trader_frontend<br/>
  Back-end repository: https://github.com/AlexanderChene/EXD_trader_backend<br/>
  Database: You need to set up mongoDB on your local machine
  
# # Set up
  Download Fron-end repository, run 'npm install' and 'npm start' inside the directory.<br/>
  Download Back-end repository, run 'nodemon server.js' inside the directory.
  
# # Demo
![image](https://user-images.githubusercontent.com/30871262/81456222-8c4d0580-915f-11ea-98b6-8c8acb74e7f7.png)

In the 'EXD trader' section, you can enter the data for a new record, then hit submit, the new data will be added to the database, then the 'Order Blotter' section will be updated, you can see the new data you just inserted.
Let's go over the steps:

# 1. Create Data
![image](https://user-images.githubusercontent.com/30871262/81456341-f1086000-915f-11ea-90a8-d4a324682dd6.png)

After you hit submit, you can see new records are added to the 'Order Blotter and the data entry section will be clean

![image](https://user-images.githubusercontent.com/30871262/81456407-257c1c00-9160-11ea-8481-5cf8a7638468.png)

# 2. Read Data:

After we add more records:

![image](https://user-images.githubusercontent.com/30871262/81456590-e3070f00-9160-11ea-85ac-8374a57318b1.png)


# 3. Delete and Update Data:

We can hit delete to delet records.
We can also hit update to update records.

![image](https://user-images.githubusercontent.com/30871262/81456678-45f8a600-9161-11ea-870c-80a5b711b42a.png)

See, the data is updated:

![image](https://user-images.githubusercontent.com/30871262/81456695-5ad53980-9161-11ea-9c27-4caafdcad3a4.png)



This is the data structure at MongoDB:

![image](https://user-images.githubusercontent.com/30871262/81456765-a556b600-9161-11ea-8fcb-f5d3d14ec0b8.png)

