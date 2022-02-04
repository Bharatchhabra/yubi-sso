import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Stepper, Step,StepLabel,StepConnector,Button,Typography,Container,
  Grid,} from "@material-ui/core";
import { Check } from "@material-ui/icons/Check";
import { FiUser } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { UserRegistration } from "../../pages/registerationpage/userregistration/UserRegistration";
import { EmailVerification } from "../../pages/registerationpage/emailverification/EmailVerification";
import { ContactInformation } from "../../pages/registerationpage/contactinformation/ContactInformation";
import { MobilePhoneVerification } from "../../pages/registerationpage/mobilephone/MobilePhoneVerification";
import './stepper.scss'

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: "#1C2038",
    },
  },
  completed: {
    
      backgroundColor: "#1C2038",
   
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#1C2038",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    zIndex: 1,
    color: "#1C2038",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#1C2038",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
  },
  active: {
    backgroundColor: "#1C2038",
    color: "#fff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "#1C2038",
    color: "#fff",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <FiUser />,
    2: <FiKey />,
    3: <FiCheck />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["", "", ""];
}

export default function StepperForm(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log("next called")
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <UserRegistration handleNext={handleNext} />;
      case 1:
        return <ContactInformation handleNext={handleNext}/>;
      case 2:
        return <EmailVerification handleNext={handleNext}/>;
      case 3:
        return <MobilePhoneVerification handleNext={handleNext}/>;
      default:
        return "Unknown step";
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={5} xs={12}>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>

        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
              <MobilePhoneVerification />
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
