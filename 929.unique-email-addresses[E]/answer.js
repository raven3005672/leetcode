/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    return [...new Set(emails.map(i => {
             const str = i.replace(/\+([a-z]|\.)*/g, '').split('@')
             return `${str[0].replace(/\./g, '')}@${str[1]}`
       }))].length
};