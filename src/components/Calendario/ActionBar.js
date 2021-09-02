import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "src/actions/userActions";
import * as classAction from "src/actions/classActions";
import clsx from "clsx";
import { Button } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import ClassModal from "src/components/common/ClassModal";
import AssignmentModal from "src/components/common/AssignmentModal";

const mapStateToProps = state => {
  const { auth, sched } = state;
  return {
    user: auth.user,
    classes: sched.schedule
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...userAction, ...classAction }, dispatch)
});

const ActionBar = ({ actions, user, classes }) => {
  const [loading, setLoading] = useState(false);
  const [classModal, setClassModal] = useState(false);
  const [assignmentModal, setAssignmentModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const token = JSON.parse(sessionStorage.getItem("token"));
      await actions.loadUser(token);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const fetchClasses = async () => {
    setLoading(true);
    try {
      if (user.length !== 0) await actions.loadClasses(`?userId=${user._id}`);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchClasses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onSelectClass = data => {
    setClassModal(true);
    setSelectedClass(data);
  };

  if (loading) return <div />;

  return (
    <div className="w-full px-10 py-6">
      {classModal &&
        <ClassModal data={selectedClass} toggleModal={setClassModal} toggleSelectedClass={setSelectedClass} />
      }
      {assignmentModal &&
        <AssignmentModal data={null} toggleModal={setAssignmentModal} />
      }
      <h1>Hello, {user?.firstName}.</h1>
      <div className={clsx("flex w-full", {
        "flex-wrap space-y-2": window.innerWidth <= 640
      })}>
        <div className="w-full lg:w-1/2 flex flex-wrap space-x-6 justify-center sm:justify-end">
          {classes.map(c => {
            return (
              <div key={c._id} className="flex space-x-2 items-center">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                <p
                  className="hover:underline cursor-pointer"
                  onClick={() => onSelectClass(c)}
                >
                  {c.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center sm:justify-end w-full lg:w-1/2">
          <Button
            colorScheme="purple"
            leftIcon={<FiPlus />}
            h="8"
            mr="4"
            onClick={() => setClassModal(x => !x)}
          >
            Add Class
          </Button>
          <Button
            colorScheme="purple"
            leftIcon={<FiPlus />}
            h="8"
            onClick={() => setAssignmentModal(x => !x)}
          >
            Add Assignment
          </Button>
        </div>
      </div>
    </div>
  );
};

ActionBar.propTypes = {
  actions: PropTypes.object.isRequired,
  classes: PropTypes.array.isRequired,
  user: PropTypes.any.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
