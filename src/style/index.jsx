import { blue } from "@radix-ui/colors";
import { gray } from "@radix-ui/colors/types/dark/gray";
import { createStitches, css } from "@stitches/react";

export const appTheme = createStitches({
    theme:{
        colors:{
            ...blue,
            ...gray,

            background: '$blue1',
            hederbg: '$blue9',

            lctext: '$gray11',
            hctext: '$gray12',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px',

            m1: '50px',
            m2: '100px',
            m3: '150px',
            m4: '200px',
            m5: '250px',
            m6: '300px',
            m7: '350px',
        },
        sizes: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px',
        },
        radii: {
            small: '5px',
            medium: '15px',
            large: '25px',
            round: '99999px'
        },
        fontSizes: {
            1: '13px',
            2: '15px',
            3: '20px',
            4: '24px',
            5: '32px',
            6: '36px',
            7: '40px',
            8: '48px'
        },
    }
});