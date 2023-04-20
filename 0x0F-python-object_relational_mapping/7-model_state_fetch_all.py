#!/usr/bin/python3
"""
lists all State objects from the database hbtn_0e_6_usa
"""

if __name__ == '__main__':
    main()
    from sqlalchemy import create_engine
    from sqlalchemy.orm import sessionmaker
    from model_state import Base, State
    import sys
    engine = create_engine("mysql+mysqldb://{}:{}@localhost/{}".format(
      sys.argv[1], sys.argv[2], sys.argv[3]))

    session = sessionmaker(bind=engine)

    session = Session()

    states = session.query(State).order_by(states.id)
    for state in states:
        print("{}: {}".format(states.id, state.name))
