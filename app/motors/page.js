import styles from "./page.module.css";
import CircularMeter from "../components/CircularMeter";
import QuickStatus from "../components/QuickStatus";
const Motors = () => {
  const motors = [
    {name: 'Front', status: 'green', rpm: 1000, temp: 20}, 
    {name: 'Back', status: 'yellow', rpm: 800, temp: 40},
    {name: 'Top', status: 'red', rpm: 750, temp: 30},
    {name: 'Core', status: 'green', rpm: 1200, temp: 50},
  ];
  
  const renderMotorDetail = (name, key, temo, rpm, status) => {
    return(
        <div className={styles.motorDetail}>
            <div className={styles.title}>{name}</div>
        </div>
    );
    
  }
  return (
    <div>
        <h1 className={styles.title}>Motors</h1>
        <div className={styles.container}>
            {motors.map((motor, index) => 
                renderMotorDetail(motor.name, index, motor.temp, motor.rpm, motor.status))
            }
        </div>
        

    
      
    </div>
  );
}

export default Motors;