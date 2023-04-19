#!/usr/bin/python3
"""
Script that takes in arguments and displays all values in the
states table of hbtn_0e_0_usa where name matches the argument.
This script is safe from MySQL injections!"""

import sys
import MySQLdb

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: {} sys.argv[1], sys.argv[2], sys.argv[3],
              sys.argv[4]".format(sys.argv[0]))
        sys.exit(1)
db = MySQLdb.connect(host='localhost', port=3306, user=sys.argv[1],
                     passwd=sys.argv[2], db=sys.argv[3])
cur = db.cursor()
cur.execute("SELECT * FROM states WHERE name=%s\
            ORDER BY states.id ASC", (sys.argv[4]))
rows = cur.fetchall()
for row in rows:
    print(row)
