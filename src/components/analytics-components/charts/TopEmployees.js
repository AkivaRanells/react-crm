import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function TopEmployees(props) {

    const topEmployeeData = () => {
        let counts = countUniqueItemsInArray(props.data);
        let compare = objectToArray(counts);
        sortArrayOfArrays(compare);
        let topThree = compare.slice(compare.length - 4, compare.length - 1);
        let finalData = arrayOfArraysToArrayOfObjects(topThree);
        console.log(finalData);
        return finalData;
    }

    const arrayOfArraysToArrayOfObjects = (array) => {
        let arrayOfObjects = array.map(function (items) {
            return {
                owner: items[0],
                Sales: items[1]
            }
        });
        return arrayOfObjects;
    }

    const sortArrayOfArrays = (array) => {
        array.sort(function (a, b) {
            return a[1] - b[1]
        })
    }

    const objectToArray = (object) => {
        let compare = [];
        for (const key in object) {
            compare.push([key, object[key]]);
        }
        return compare;
    }

    const countUniqueItemsInArray = (array) => {
        let counts = {};
        for (let item of array) {
            if (counts[item] === undefined) {
                counts[item] = 1;
            } else {
                counts[item] += 1;
            }
        }
        return counts
    }

    return (
            <ResponsiveContainer width={400} height={250}>
                <BarChart width={400} height={250} data={topEmployeeData()}
                    margin={{ top: 50, right: 30, left: 20, bottom: 5 }} layout={"vertical"}>
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="owner" />
                    <Tooltip />
                    <Legend />
                    <Bar layout={"vertical"} dataKey="Sales" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
    )
}
export default TopEmployees