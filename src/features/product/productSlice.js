import { createSlice } from "@reduxjs/toolkit";
import Images from "../../constants/image";
import { v4 as uuidv4 } from 'uuid';


const initialProducts = [
    {
        id: uuidv4(), name: 'Iphone 12 Pro Max',
        src: Images.PRODUCT_1,
        price: 1532,
        oldPrice: 1618,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Samsung Galaxy S21',
        src: Images.PRODUCT_2,
        price: 776,
        oldPrice: 906,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Samsung Galaxy A52',
        src: Images.PRODUCT_3,
        price: 414,
        oldPrice: 445,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Oppo A74 5G',
        src: Images.PRODUCT_4,
        price: 323,
        oldPrice: 345,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Xiaomi Redmi Note 10',
        src: Images.PRODUCT_5,
        price: 248,
        oldPrice: 261,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Xiaomi Redmi 9T',
        src: Images.PRODUCT_6,
        price: 173,
        oldPrice: 217,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Xiaomi Mi 11 Lite',
        src: Images.PRODUCT_7,
        price: 309,
        oldPrice: 348,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Vivo Y72',
        src: Images.PRODUCT_8,
        price: 330,
        oldPrice: 348,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Samsung Galaxy A72',
        src: Images.PRODUCT_9,
        price: 480,
        oldPrice: 500,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Realme 8 Pro',
        src: Images.PRODUCT_10,
        price: 323,
        oldPrice: 378,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Oppo Reno5 5G',
        src: Images.PRODUCT_11,
        price: 352,
        oldPrice: 378,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Oppo A93',
        src: Images.PRODUCT_12,
        price: 260,
        oldPrice: 283,
        isMobile: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth AirPods 2 Wireless Apple MRXJ2/MV7N2',
        src: Images.HEADPHONE_1,
        price: 200,
        oldPrice: 217,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth AirPods Max Apple MGYH3/MGYJ3/MGYL3',
        src: Images.HEADPHONE_2,
        price: 550,
        oldPrice: 610,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth Headphone Mozard K8',
        src: Images.HEADPHONE_3,
        price: 15,
        oldPrice: 20,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Gaming Headphone Rapoo VH520C',
        src: Images.HEADPHONE_4,
        price: 20,
        oldPrice: 26,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth True Wireless Mozard Q8',
        src: Images.HEADPHONE_5,
        price: 25,
        oldPrice: 35,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth True Wireless Rapoo I100',
        src: Images.HEADPHONE_6,
        price: 25,
        oldPrice: 30,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth True Wireless Samsung Galaxy Buds+ R175',
        src: Images.HEADPHONE_7,
        price: 64,
        oldPrice: 93,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth True Wireless Xiaomi Earbuds Basic 2 BHR4272GL',
        src: Images.HEADPHONE_8,
        price: 30,
        oldPrice: 35,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Earphone Oppo Jack 3.5 MH151',
        src: Images.HEADPHONE_9,
        price: 26,
        oldPrice: 26,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Earphone Oppo Jack 3.5 MH320',
        src: Images.HEADPHONE_10,
        price: 10,
        oldPrice: 10,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Earphone Rapoo Jack 3.5 EP28',
        src: Images.HEADPHONE_11,
        price: 8,
        oldPrice: 10,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Earphone Oppo Jack Type-C MH135-3',
        src: Images.HEADPHONE_12,
        price: 12,
        oldPrice: 12,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth EarPhone Mozard R559X',
        src: Images.HEADPHONE_13,
        price: 13,
        oldPrice: 20,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth Earphone Jabra Talk 15',
        src: Images.HEADPHONE_14,
        price: 31,
        oldPrice: 40,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth EarPhone Mozard LE003',
        src: Images.HEADPHONE_15,
        price: 14,
        oldPrice: 20,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth Earphone Jabra Talk 45',
        src: Images.HEADPHONE_16,
        price: 105,
        oldPrice: 105,
        isHeadPhone: true,
    },
    {
        id: uuidv4(),
        name: 'Power Bank Polymer 10.000mAh AVA PJ JP207',
        src: Images.POWER_BANK_1,
        price: 11,
        oldPrice: 20,
        isPowerBank: true,
    },
    {
        id: uuidv4(),
        name: 'Power Bank 7500mAh AVA DS630',
        src: Images.POWER_BANK_2,
        price: 8,
        oldPrice: 13,
        isPowerBank: true,
    },
    {
        id: uuidv4(),
        name: 'Power Bank 10.000mAh AVA LA Y65',
        src: Images.POWER_BANK_3,
        price: 10,
        oldPrice: 18,
        isPowerBank: true,
    },
    {
        id: uuidv4(),
        name: 'Power Bank Polymer 10.000mAh AVA PJ JP191S',
        src: Images.POWER_BANK_4,
        price: 11,
        oldPrice: 20,
        isPowerBank: true,
    },

    {
        id: uuidv4(),
        name: 'Bluetooth Speaker JBL Charge 4',
        src: Images.SPEAKER_1,
        price: 130,
        oldPrice: 130,
        isSpeaker: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth Speaker LG Xboom Go PL5',
        src: Images.SPEAKER_2,
        price: 65,
        oldPrice: 157,
        isSpeaker: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth Speaker Mozard Y550 Plus',
        src: Images.SPEAKER_3,
        price: 20,
        oldPrice: 25,
        isSpeaker: true,
    },
    {
        id: uuidv4(),
        name: 'Bluetooth Speaker Sony Extra Bass SRS-XB33',
        src: Images.SPEAKER_4,
        price: 130,
        oldPrice: 161,
        isSpeaker: true,
    },
    {
        id: uuidv4(),
        name: 'Adapter Charger 18W OPPO OP92KAUH',
        src: Images.CHARGER_CABLE_1,
        price: 21,
        oldPrice: 21,
        isCharger: true,
    },
    {
        id: uuidv4(),
        name: 'Adapter Charger 2.4A AVA ASUC62a',
        src: Images.CHARGER_CABLE_2,
        price: 5,
        oldPrice: 5,
        isCharger: true,
    },
    {
        id: uuidv4(),
        name: 'Adapter Charger VOOC 30W OPPO VC56JAUH',
        src: Images.CHARGER_CABLE_3,
        price: 32,
        oldPrice: 32,
        isCharger: true,
    },
    {
        id: uuidv4(),
        name: 'Adapter Charger Type C PD 20W Xmobile TC20W',
        src: Images.CHARGER_CABLE_4,
        price: 13,
        oldPrice: 13,
        isCharger: true,
    },
    {
        id: uuidv4(),
        name: 'Cáp Lightning 1m Hydrus DR-L03',
        src: Images.CHARGER_CABLE_5,
        price: 5,
        oldPrice: 5,
        isCharger: true,
    },
    {
        id: uuidv4(),
        name: 'Cable Lightning AVA+ DR-L04',
        src: Images.CHARGER_CABLE_6,
        price: 5,
        oldPrice: 5,
        isCharger: true,
    },
    {
        id: uuidv4(),
        name: 'Cable Type C - Type C 1m Mbest DS075X',
        src: Images.CHARGER_CABLE_7,
        price: 9,
        oldPrice: 9,
        isCharger: true,
    },
    {
        id: uuidv4(),
        name: 'Cable Type C - Type C 0.9m Anker PowerLine III A8852',
        src: Images.CHARGER_CABLE_8,
        price: 11,
        oldPrice: 11,
        isCharger: true,
    },

];

const product = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {
        addProduct: (state, action) => {
            return state;
        },
    }
});

const { reducer, actions } = product;
export const { addProduct } = actions;
export default reducer;