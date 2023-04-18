#!/usr/bin/python3
if __name__ == '__main__':
import MySQLdb
import sys
"""if __name__ == '__main__':"""
"""mysql_username = sys.argv[1]
mysql_password = sys.argv[2]
database_name = sys.argv[3]"""
db = MySQLdb.connect(host="localhost", port=3306, user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3] )

cur = db.cursor()
cur.execute("SELECT * FROM states ORDER BY states.id ASC;")
rows = cur.fetchall()
for row in rows:
    print(row)

"""cursor.close()
db.close()"""
