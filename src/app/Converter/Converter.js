import { useState, useEffect } from "react";
import SelectValue from "@/app/Select/SelectValue";
import './style.css'
import { Input, Typography, Button } from '@mui/material';

export default function Converter() {
    const [invalue, setInvalue] = useState('');
    const [outvalue, setOutvalue] = useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});
    const [selectedCode, setSelectedCode] = useState(1);
    const [selectedCode2, setSelectedCode2] = useState(1);


    useEffect(() => {
        setOutvalue(((invalue / selectedCode) * selectedCode2).toFixed(2));
    }, [invalue, selectedCode, selectedCode2]);

    useEffect(() => {
        fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_nW3rH7qt6AwnOk7Enttm8cu2hDR5Cwxj2ipDaWaN")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        console.log("rerender")
    }, []);
    const swapCurrencies = () => {
        const temp = selectedCode;
        setSelectedCode(selectedCode2);
        setSelectedCode2(temp);
    };
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="converter">
                <div className={"in"}>
                    <Typography variant={"h6"}>Input</Typography>
                    <Input type="number"
                           value={invalue}
                           onChange={(e) => setInvalue(parseFloat(e.target.value))}
                           placeholder="Enter amount"/>
                    <SelectValue items={items}
                            value={selectedCode}
                            onChange={(e) => setSelectedCode(e.target.value)} /></div>
                <div className="button-container" style={{ textAlign: "center", margin: "1rem" }}>
                    <Button variant="outlined" onClick={swapCurrencies}>⇅ Replace</Button>
                </div>
                <div className={"out"}>
                    <Typography variant={"h6"}>Outnput</Typography>

                    <Input value={outvalue} readOnly={true} placeholder={"0.00"}/>
                    <SelectValue items={items}
                            value={selectedCode2}
                            onChange={(e) => setSelectedCode2(e.target.value)} />

                </div>

            </div>
        );
    }
}
