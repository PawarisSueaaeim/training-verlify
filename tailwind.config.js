/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
    safelist: [
        "grid-rows-1",
        "grid-rows-2",
        "grid-rows-3",
        "grid-rows-4",
        "grid-rows-5",
        "grid-rows-6",
        "grid-rows-7",
        "grid-rows-8",
        "grid-rows-9",
        "grid-rows-10",
        "grid-rows-11",
        "grid-rows-12",
        "grid-rows-13",
        "grid-rows-14",
        "grid-rows-15",
    ],
    theme: {
        extend: {
            backgroundImage: {
                backgroundImage: "url('/Page2BackgroundPicture.jpg')",
            },
            minHeight: {
                'sideBar': 'calc(100vh - 78px)',
            },
            height: {
                'errorHeightScreen': 'calc(100vh - 118px)'
            },
            gridTemplateColumns: {
                'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
                'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
                'auto-fit-150': 'repeat(auto-fit, minmax(150px, 1fr))',
                'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
                'auto-fit-270': 'repeat(auto-fit, minmax(270px, 1fr))',
                'auto-fit-350': 'repeat(auto-fit, minmax(350px, 1fr))',
              },
            keyframes: {
                blink: {
                    '0%, 100%': {
                        backgroundColor: "#FF0000"
                    },
                    '50%': {
                        backgroundColor: "#FFFFFF"
                    }
                },
            },
            animation: {
                blink: 'blink 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            },
            colors: {
                white: '#FFF',
                whiteSmoke: '#F7F7F7',
                lightGrey: '#D9D9D9',
                grey: '#9B9B9B',
                intenseGrey: '#828282',
                black: '#000',
                groupLightBlue: '#68D2E8',
                groupDarkBlue: '#03AED2',
                pastelBlue: '#63A0D9',
                tokioBlue: '#0191D2',
                lightBlue: '#3B82F6',
                hyperLinkBlue: '#007BFF',
                samsungBlue: '#0C4DA2',
                rapidBlue: '#1A417B',
                lightGreen: '#8FD796',
                emeraldGreen: '#16BE3B',
                excelGreen: '#28A745',
                pastelPink: '#F8C8DC',
                chubbPink: '#F58696',
                pdfRed: '#EE3E36',
                alarmRed: '#FF0000',
                darkRed: '#C40C0C',
                lightYellow: '#FDDE55',
                creamYellow: '#FFCB00',
                warningYellow: '#FFBC29',
                backgroundColor1: '#F2F2F2',
                backgroundColor2: '#779ECB',
                indigo30: '#D4CBFF',
                indigo70: '#997AFC',
                purple70: '#B176E2',
                blue70: '#4B92E5',
                blue110: '#2C62A9',
                blue150: '#021A4C',
                magenta70: '#DA62C4',
            },
            boxShadow: {
                basic: "0px 0px 12px 3px #0000000D",
            },
        },
        fontFamily: {
            sans: ["Arial", "Helvetica", "sans-serif"],
        },
        backgroundImage: {
            // backgroundPicture1: "url('../asset/')",
            pageNotFound: "url('./src/assets/images/PageNotFoundPicture.jpg')",
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                ".p-calc": {
                    paddingLeft: "calc((100vw - 1450px)/2)",
                    paddingRight: "calc((100vw - 1450px)/2)",
                },
            });
        },
    ],
};
