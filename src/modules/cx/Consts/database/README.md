# 数据库相关常量

## DB_MSSQL
Microsoft SQL Server 数据库。

## DB_MYSQL
MySQL 数据库。

## DB_ORACLE
Oracle 数据库。

## DB_POSTGRESQL
PostgreSQL 数据库。

## 示例

```js
// 判断是否为 MySQL 数据库
if (dbType === cx.consts.DB_MYSQL) {
  // MySQL 特定的处理逻辑
}

// 判断是否为 Oracle 数据库
if (dbType === cx.consts.DB_ORACLE) {
  // Oracle 特定的处理逻辑
}
``` 