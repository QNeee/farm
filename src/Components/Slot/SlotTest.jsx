import styles from './slotTest.module.css';

const images = [
  'https://cdn-icons-png.flaticon.com/128/8616/8616932.png',
  'https://cdn-icons-png.flaticon.com/128/8336/8336950.png',
  'https://cdn-icons-png.flaticon.com/128/8336/8336939.png',
  'https://cdn-icons-png.flaticon.com/128/8336/8336957.png',
  'https://cdn-icons-png.flaticon.com/128/8336/8336954.png',
  'https://cdn-icons-png.flaticon.com/128/8616/8616927.png',
  'https://cdn-icons-png.flaticon.com/128/8616/8616932.png',
  'https://cdn-icons-png.flaticon.com/128/8336/8336950.png',
  'https://cdn-icons-png.flaticon.com/128/8336/8336939.png',
  'https://cdn-icons-png.flaticon.com/128/8336/8336957.png',
  // 'https://cdn-icons-png.flaticon.com/128/8336/8336954.png',
  // 'https://cdn-icons-png.flaticon.com/128/8616/8616927.png',
  // 'https://cdn-icons-png.flaticon.com/128/8616/8616932.png',
  // 'https://cdn-icons-png.flaticon.com/128/8336/8336950.png',
  // 'https://cdn-icons-png.flaticon.com/128/8336/8336939.png',
  // 'https://cdn-icons-png.flaticon.com/128/8336/8336957.png',
  // 'https://cdn-icons-png.flaticon.com/128/8336/8336954.png',
  // 'https://cdn-icons-png.flaticon.com/128/8616/8616927.png',
];

const SlotTest = () => {
  return (
    <div className={styles.machine}>
      <div className={styles.slots}>
        <ul className={styles.slot}>
          {images.map((image, index) => (
            <li key={index} className={styles.pic}>
              <img src={image} alt="" />
            </li>
          ))}
        </ul>
        <ul className={styles.slot}>
          {images.map((image, index) => (
            <li key={index} className={styles.pic}>
              <img src={image} alt="" />
            </li>
          ))}
        </ul>
        <ul className={styles.slot}>
          {images.map((image, index) => (
            <li key={index} className={styles.pic}>
              <img src={image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SlotTest;
