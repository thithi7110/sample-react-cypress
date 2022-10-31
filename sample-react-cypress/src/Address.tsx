import React, { useState, useEffect, EventHandler, ChangeEventHandler } from 'react'
import axios from "axios"

type Props = {
    zipcode?: string
    onChange?: (e: string) => void
}
// function AddNum(num1: Number, num2: Number) {
export default function Address(props: Props) {

    const initialState = {
        "zipcode": "",
        "address1": "",
        "address2": "",
        "address3": "",
        "kana1": "",
        "kana2": "",
        "kana3": "",
        "prefcode": "",
    }

    const [zipInfo, setZipInfo] = useState(initialState);

    const getPostInfo = (zipcode: string) => {
        axios.create({
            baseURL: "http://localhost:8085/api",
            headers: {
                "Content-type": "application/json",
            }
        }).get(
            `/zip?zipcode=${zipcode}`
        ).then((res: any) => {
            let inputdata = { ...zipInfo };
            inputdata.address1 = res.data.results[0].address1;
            inputdata.address2 = res.data.results[0].address2;
            inputdata.address3 = res.data.results[0].address3;
            inputdata.kana1 = res.data.results[0].kana1;
            inputdata.kana2 = res.data.results[0].kana2;
            inputdata.kana3 = res.data.results[0].kana3;
            inputdata.prefcode = res.data.results[0].prefcode;
            setZipInfo(inputdata);
        }).catch(e => {
            let error = { ...initialState };
            error.address1 = e;
            setZipInfo(error);

        });
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

        let inputdata = { ...initialState };
        inputdata.zipcode = e.target.value;
        setZipInfo(inputdata);

        if (e.target.value.length == 7) {
            //API呼び出し
            getPostInfo(e.target.value);
        }
    }

    return (
        <>
            <div>
                <input data-cy='zipcode' value={props.zipcode} onChange={onChange} />
            </div>
            <div>
            <input data-cy='address1' value={zipInfo.address1} />
            </div>
            <input data-cy='address2' value={zipInfo.address2} />
            <input data-cy='address3' value={zipInfo.address3} />
            <input data-cy='kana1' value={zipInfo.kana1} />
            <input data-cy='kana2' value={zipInfo.kana2} />
            <input data-cy='kana3' value={zipInfo.kana3} />
            <input data-cy='prefcode' value={zipInfo.prefcode} />
        </>
    );
}

