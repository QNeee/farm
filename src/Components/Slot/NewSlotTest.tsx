import { Pic, Slot, SlotsContainer } from './NewSlotTest.styled';
import { IImg } from './Slot';
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

const NewSlotTest = () => {
    return (
        <div>
            <SlotsContainer>
                <Slot>
                    {images.map((image, index) => (
                        <Pic>
                            <img src={image} alt="" />
                        </Pic>
                    ))}
                </Slot>
                <Slot>
                    {images.map((image, index) => (
                        <Pic>
                            <img src={image} alt="" />
                        </Pic>
                    ))}
                </Slot>
                <Slot>
                    {images.map((image, index) => (
                        <Pic>
                            <img src={image} alt="" />
                        </Pic>
                    ))}
                </Slot>
            </SlotsContainer>
        </div>
    );
};

export default NewSlotTest;
