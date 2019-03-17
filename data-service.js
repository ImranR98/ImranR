var fs = require('fs'); //For File System Operations

// --- EXPERIENCE AND EDUCATION ---

//Returns the Experience or Education entry parameter if it is in the format specified above
ensureCareerEntryIsValid = function (entry) {
    var valid = true;
    var err = [];

    if (entry.place == undefined) {
        valid = false;
        err.push("Place not found");
    } else {
        if (typeof (entry.place) != "string") {
            valid = false;
            err.push("Place is not a string");
        }
    }

    if (entry.title == undefined) {
        valid = false;
        err.push("Title not found");
    } else {
        if (typeof (entry.title) != "string") {
            valid = false;
            err.push("Title is not a string");
        }
    }

    if (entry.startDate == undefined) {
        valid = false;
        err.push("Start Date not found");
    } else {
        if (typeof (entry.startDate) != "string") {
            valid = false;
            err.push("Start Date is not a string");
        }
    }

    if (entry.isCurrent == undefined) {
        valid = false;
        err.push("Is Current not found");
    } else {
        if (typeof (entry.isCurrent) != "boolean") {
            valid = false;
            err.push("Is Current is not a boolean");
        } else {
            if (!entry.isCurrent) {
                if (!entry.endDate) {
                    valid = false;
                    err.push("End Date not found");
                } else {
                    if (typeof (entry.endDate) != "string") {
                        valid = false;
                        err.push("End Date is not a string");
                    }
                }
            } else {
                entry.endDate = null;
            }
        }
    }

    if (entry.description == undefined) {
        valid = false;
        err.push("Description not found");
    } else {
        if (entry.description.descriptionText == undefined) {
            valid = false;
            err.push("Description Text not found");
        } else {
            if (typeof (entry.description.descriptionText) != "string") {
                valid = false;
                err.push("Description Text is not a string");
            } else {
                if (entry.description.descriptionPointSets == undefined) {
                    valid = false;
                    err.push("Description Point Sets not found");
                } else {
                    if (typeof (entry.description.descriptionPointSets) != "object") {
                        valid = false;
                        err.push("Description Point Sets is not an object");
                    } else {
                        if (entry.description.descriptionPointSets.length > 0) {
                            for (var i = 0; i < entry.description.descriptionPointSets.length; i++) {
                                if (entry.description.descriptionPointSets[i].pointSetTitle == undefined) {
                                    valid = false;
                                    err.push("Description Point Set Title not found for Point Set " + (i + 1));
                                } else {
                                    if (typeof (entry.description.descriptionPointSets[i].pointSetTitle) != "string") {
                                        valid = false;
                                        err.push("Description Point Set Title is not a string for Point Set " + (i + 1));
                                    } else {
                                        if (entry.description.descriptionPointSets[i].points == undefined) {
                                            valid = false;
                                            err.push("Description Point Set Points not found for Point Set " + (i + 1));
                                        } else {
                                            if (typeof (entry.description.descriptionPointSets[i].points) != "object") {
                                                valid = false;
                                                err.push("Description Point Set Points is not an object for Point Set " + (i + 1));
                                            } else {
                                                if (entry.description.descriptionPointSets[i].points.length > 0) {
                                                    for (var j = 0; j < entry.description.descriptionPointSets[i].points.length; j++) {
                                                        if (typeof (entry.description.descriptionPointSets[i].points[j]) != "string") {
                                                            valid = false;
                                                            err.push("Description Point Set Point is not a string for Point " + (j + 1) + " of Point Set " + (i + 1));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (valid) {
        return entry;
    } else {
        return { errors: err };
    }
}

//Returns all valid entries in the parameter array of Experience or Education entries
returnValidCareerEntriesInArray = function (entryArray) {
    var finalEntries = [];
    var errorArray = [];
    var finalErrors = [];

    if (typeof (entryArray) == "object") {
        var temp = [];
        for (var i = 0; i < entryArray.length; i++) {
            temp.push(ensureCareerEntryIsValid(entryArray[i]));
            if (!temp[i].errors) {
                finalEntries.push(temp[i]);
                errorArray.push(null);
            } else {
                errorArray.push(temp[i]);
            }
        }
    }

    for (var i = 0; i < errorArray.length; i++) {
        if (errorArray[i]) {
            var temp = [];
            for (var j = 0; j < errorArray[i].errors.length; j++) {
                temp.push(errorArray[i].errors[j]);
            }
            finalErrors.push({ entry: (i + 1), errors: temp });
        }
    }

    return { entries: finalEntries, errors: finalErrors };
}

//Loads and validates Experience or Education entries from a file, returning all valid entries and errors for invalid ones
module.exports.loadCareer = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, function read(err, data) {
            if (err) {
                reject(err);
            } else {
                //Checks if file is valid JSON
                var finalArray = null;
                if (data.length > 0) {
                    try { finalArray = JSON.parse(data) } catch (err) {
                        reject("Error loading JSON: " + err);
                    }
                } else {
                    reject("File is empty.")
                }

                //Returns all valid entries and errors for invalid entries
                try {
                    finalArray = returnValidCareerEntriesInArray(finalArray);
                    resolve(finalArray);
                } catch (err) {
                    reject(err);
                }
            }
        })
    });
}

// --- SKILLS ---

//Returns the Skill entry parameter if it is in the format specified above
ensureSkillEntryIsValid = function (entry) {
    var valid = true;
    var err = [];

    if (entry.skill == undefined) {
        valid = false;
        err.push("Skill not found");
    } else {
        if (typeof (entry.skill) != "string") {
            valid = false;
            err.push("Skill is not a string");
        }
    }

    if (valid) {
        return entry;
    } else {
        return { errors: err };
    }
}

//Returns all valid entries in the parameter array of Skill entries
returnValidSkillEntriesInArray = function (entryArray) {
    var finalEntries = [];
    var errorArray = [];
    var finalErrors = [];

    if (typeof (entryArray) == "object") {
        var temp = [];
        for (var i = 0; i < entryArray.length; i++) {
            temp.push(ensureSkillEntryIsValid(entryArray[i]));
            if (!temp[i].errors) {
                finalEntries.push(temp[i]);
                errorArray.push(null);
            } else {
                errorArray.push(temp[i]);
            }
        }
    }

    for (var i = 0; i < errorArray.length; i++) {
        if (errorArray[i]) {
            var temp = [];
            for (var j = 0; j < errorArray[i].errors.length; j++) {
                temp.push(errorArray[i].errors[j]);
            }
            finalErrors.push({ entry: (i + 1), errors: temp });
        }
    }

    return { entries: finalEntries, errors: finalErrors };
}

//Loads and validates Skill entries from a file, returning all valid entries and errors for invalid ones
module.exports.loadSkills = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, function read(err, data) {
            if (err) {
                reject(err);
            } else {
                //Checks if file is valid JSON
                var finalArray = null;
                if (data.length > 0) {
                    try { finalArray = JSON.parse(data) } catch (err) {
                        reject("Error loading JSON: " + err);
                    }
                } else {
                    reject("File is empty.")
                }

                //Returns all valid entries and errors for invalid entries
                try {
                    finalArray = returnValidSkillEntriesInArray(finalArray);
                    resolve(finalArray);
                } catch (err) {
                    reject(err);
                }
            }
        })
    });
}

// --- CONTACT ---

//Returns the parameter Contact object after removing invalid data
returnValidContactData = function (contact) {
    var err = [];
    var contactFinal = {
        name: null,
        email: null,
        phones: [],
        links: []
    };

    if (contact.name == undefined) {
        err.push("Name not found");
    } else {
        if (typeof (contact.name) != "string") {
            err.push("Name is not a string");
        } else {
            contactFinal.name = contact.name
        }
    }

    if (contact.email == undefined) {
        err.push("Email not found");
    } else {
        if (typeof (contact.email) != "string") {
            err.push("Email is not a string");
        } else {
            contactFinal.email = contact.email
        }
    }

    if (contact.phones == undefined) {
        err.push("Phones not found");
    } else {
        if (typeof (contact.phones) != "object") {
            err.push("Phones is not an object");
        } else {
            if (contact.phones.length > 0) {
                for (var i = 0; i < contact.phones.length; i++) {
                    var validPhone = true;

                    if (contact.phones[i].type == undefined) {
                        validPhone = false;
                        err.push("Type not found for Phone " + (i + 1));
                    } else {
                        if (typeof (contact.phones[i].type) != "string") {
                            validPhone = false;
                            err.push("Type is not a string for Phone " + (i + 1));
                        }
                    }

                    if (contact.phones[i].countryCode == undefined) {
                        validPhone = false;
                        err.push("Country Code not found for Phone " + (i + 1));
                    } else {
                        if (typeof (contact.phones[i].countryCode) != "string") {
                            validPhone = false;
                            err.push("Country Code is not a string for Phone " + (i + 1));
                        }
                    }

                    if (contact.phones[i].number == undefined) {
                        validPhone = false;
                        err.push("Number not found for Phone " + (i + 1));
                    } else {
                        if (typeof (contact.phones[i].number) != "string") {
                            validPhone = false;
                            err.push("Number is not a string for Phone " + (i + 1));
                        }
                    }

                    if (validPhone) {
                        contactFinal.phones.push(contact.phones[i]);
                    }
                }
            }
        }
    }

    if (contact.links == undefined) {
        err.push("Links not found");
    } else {
        if (typeof (contact.links) != "object") {
            err.push("Links is not an object");
        } else {
            if (contact.links.length > 0) {
                for (var i = 0; i < contact.links.length; i++) {
                    var validLink = true;

                    if (contact.links[i].name == undefined) {
                        validLink = false;
                        err.push("Name not found for Link " + (i + 1));
                    } else {
                        if (typeof (contact.links[i].name) != "string") {
                            validLink = false;
                            err.push("Name is not a string for Link " + (i + 1));
                        }
                    }

                    if (contact.links[i].url == undefined) {
                        validLink = false;
                        err.push("URL not found for Link " + (i + 1));
                    } else {
                        if (typeof (contact.links[i].url) != "string") {
                            validLink = false;
                            err.push("URL is not a string for Link " + (i + 1));
                        }
                    }

                    if (validLink) {
                        contactFinal.links.push(contact.links[i]);
                    }
                }
            }
        }
    }

    return { contact: contactFinal, errors: err };
}

//Loads and validates Contact data from a file, returning all valid data and errors for invalid data
module.exports.loadContact = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, function read(err, data) {
            if (err) {
                reject(err);
            } else {
                //Checks if file is valid JSON
                var finalObject = null;
                if (data.length > 0) {
                    try { finalObject = JSON.parse(data) } catch (err) {
                        reject("Error loading JSON: " + err);
                    }
                } else {
                    reject("File is empty.")
                }

                //Returns all valid entries and errors for invalid entries
                try {
                    finalObject = returnValidContactData(finalObject);
                    resolve(finalObject);
                } catch (err) {
                    reject(err);
                }
            }
        })
    });
}