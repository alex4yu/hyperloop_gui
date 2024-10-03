import styles from "./page.module.css";
import CircularMeter from "./components/CircularMeter";
import QuickStatus from "./components/QuickStatus";
export default function Home() {
  const motors = [
    {name: 'Front', status: 'green', rpm: 1000, temp: 20}, 
    {name: 'Back', status: 'yellow', rpm: 800, temp: 40},
    {name: 'Top', status: 'red', rpm: 750, temp: 30},
    {name: 'Core', status: 'green', rpm: 1200, temp: 50},
  ];
  

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <div>
          <div style={{ backgroundColor: 'green', height: '20px', width: '200px', borderRadius: '5px' }}></div>
          <span>70%</span>
        </div>
        <button className={styles.stopButton}>STOP</button>
      </header>

      {/* Motors Section */}
      <section className={styles.motors}>
        <div className={styles.sectionTitle}>Motors</div>
        {motors.map((motor, index) => (
          <QuickStatus 
            name={motor.name} 
            key={index} 
            temp={motor.temp} 
            rpm={motor.rpm}
            status={motor.status}
            />
        ))}
      </section>

      {/* Propulsion Section */}
      <section className={styles.propulsion}>
        <div>
          <h1>Speedometer Example</h1>
          <CircularMeter min={0} max={200} data={100} partitions={10} />
        </div>
      </section>

      {/* Sensors Section */}
      <section className={styles.sensors}>
        <div className={styles.sectionTitle}>Sensors</div>
      </section>

      {/* Water Section */}
      <section className={styles.water}>
        <div className={styles.sectionTitle}>Water</div>
        <p>Pressure: </p>
      </section>

      {/* Status Section */}
      <section className={styles.status}>
        <div className={styles.sectionTitle}>Status</div>
        <div className={styles.statusIndicator}>
          <div className={`${styles.statusItem} ${styles.alert}`}>
            <p>Explosive/Flammable Gases</p>
            <p>8.0</p>
          </div>
          <div className={styles.statusItem}>
            <p>Communication</p>
          </div>
          <div className={styles.statusItem}>
            <p>Power</p>
          </div>
        </div>
      </section>
    </div>
  );
}
