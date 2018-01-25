/*
Design a User Level Calculation Function
https://www.codewars.com/kata/fake-website-number-5-design-an-accurate-user-level-calculation-function/javascript

The long list of requirements are listed at the link above! I am creating a user level calculation function similar to the system used at Codewars.
*/ 

'use strict';

let calcLevel = (currentLevel, solvedKatas) => {
    let results = {}, total = 0;

    // Function to calculate level based on points
    let getLvl = x => {
        let level = {'8kyu': x >= 0 && x < 91, '7kyu': x >= 91 && x < 181, '6kyu': x >= 181 && x < 361, '5kyu': x >= 361 && x < 721, '4kyu': x >= 721 && x < 1441, '3kyu': x >= 1441 && x < 2881, '2kyu': x >= 2881 && x < 5761, '1kyu': x >= 5761 && x < 11521, '1dan': x >= 11521};
        for (let i in level) {
            if (level[i]) return i;
            if (level[i] === undefined) return null;
        }
    };

    // Function to calculate percent based on points
    let calcPercents = (points, level) => {
        let percents = { // [0]range, [1]upper limit (less than)
            '8kyu': [90, 91], '7kyu': [90, 181], '6kyu': [180, 361], '5kyu': [360, 721], '4kyu': [720, 1441], '3kyu': [1440, 2881], '2kyu': [2880, 5761], '1kyu': [5760, 11521]};
        if (percents[level] === undefined) return null;
        if (level === '8kyu' && points == 0) return 0;
        let n = (1 - ((percents[level][1] - points) / percents[level][0])) * 100;
        return Math.floor(n.toFixed(3));
    };

    // Function to convert solved katas array into points
    let getPoints = (lang, rank) => {
        let getPointsObj = { '8kyu': 1, '7kyu': 2, '6kyu': 3, '5kyu': 4, '4kyu': 5, '3kyu': 6, '2kyu': 7, '1kyu': 8, '1dan': 9 };
        if (getPointsObj[results[lang]] > getPointsObj[rank]) return 1;
        return (getPointsObj[rank] - getPointsObj[results[lang]]) * 2 + 3;
    };

    // Calculate initial level
    for (let i in currentLevel) {
        if (currentLevel[i] < 0) return 'Invalid data!';
        let lvl = getLvl(currentLevel[i]);
        if (lvl === null) return 'Invalid data!';
        results[i] = lvl;
    }

    // Convert solved katas into points and add to current points, then convert to output level
    while (solvedKatas.length) {
        let kataPoints = { js: 0, java: 0, ruby: 0 }, temp = solvedKatas.pop().split(' ');
        if (temp[0] !== 'js' && temp[0] !== 'ruby' && temp[0] !== 'java') return 'Invalid data!';
        kataPoints[temp[0]] += getPoints(temp[0], temp[1]);
        currentLevel[temp[0]] += kataPoints[temp[0]];
        results[temp[0]] = getLvl(currentLevel[temp[0]]);
    }

    // Calculate total level
    for (let i in currentLevel) total += currentLevel[i];
    total = Math.round(total / 2.5);
    currentLevel.total = total;
    results.total = getLvl(total);

    // Calculate level percentage
    for (let i in currentLevel) {
        if (currentLevel[i] > 11520) {
            results[i + 'Percent'] = 0;
            continue;
        }
        let percent = calcPercents(currentLevel[i], results[i]);
        if (percent === null) return 'Invalid data!'
        results[i + 'Percent'] = percent;
    }

    return `Total level: ${results.total} ${results.totalPercent}%, JS level: ${results.js} ${results.jsPercent}%, Ruby level: ${results.ruby} ${results.rubyPercent}%, Java level: ${results.java} ${results.javaPercent}%`;
}