
export const getRegexMatches = (string, regexExpression, callback) => {
    let match;
    while (( match = regexExpression.exec(string) ) !== null) {
        callback(match);
    }
};
