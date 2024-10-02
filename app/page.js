import Image from "next/image";
import styles from "./page.module.css";
import CircularMeter from "./components/CircularMeter";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <div>
          <div style={{ backgroundColor: 'green', height: '20px', width: '200px', borderRadius: '5px' }}></div>
          <span>70%</span>
        </div>
        <div>
          <img src="/logo.png" alt="Logo" style={{ width: '50px' }} />
        </div>
        <button className={styles.stopButton}>STOP</button>
      </header>

      {/* Motors Section */}
      <section className={styles.motors}>
        <div className={styles.sectionTitle}>Motors</div>
        {['A', 'B', 'C', 'D'].map((motor, index) => (
          <div key={index} className={styles.motorItem}>
            <div className={styles.label}>{motor}</div>
            <div className={styles.data}>
              <div>
                <p>Temperature</p>
                <p>RPM</p>
              </div>
              <div className={styles.bar}></div>
            </div>
          </div>
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
