import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios';
import { useEffect, useState } from 'react';


const FaqFunction = () => {
    const [data, setdata] = useState(null);
    const getData = async () => {
        const data = await axios.get('https://sandbox.practical.me/api/faq')
        setdata(data.data.data);
    }
    useEffect(() => {
        getData();
    }, [])

    if (!data) {
        return;
    }
    return (
        <div>
            <div>
                {
                    data.map(element => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>{element.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {element.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))

                }
            </div>
        </div>

    );

}

export default FaqFunction;