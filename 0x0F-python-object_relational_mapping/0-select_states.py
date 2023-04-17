#!/usr/bin/python3
import MySQLdb
import sys

mysql_username = sys.argv[1]
mysql_password = sys.argv[2]
database_name = sys.argv[3]
db = MySQLdb.connect(host='localhost', port=3306, user=mysql_username, passwd=mysql_password, db=database_name)

cursor = db.cursor()
cursor.execute('SELECT * FROM states ORDER BY id ASC')

for state in cursor.fetchall():
    print(states.id)

    db.close()
