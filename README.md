# UFO Analysis


## Overview of UFO Analysis
Dana is a data journalist who wishes to write about the UFO sightings in her hometown. All she has to use is a javascript file filled with logged information from UFO sightings in several countries. To help Dana navigate this massive amount of data, we built a dynamic page by inserting javascript into an HTML web page. The data is presented in a table that can be filtered by different criteria to narrow down the results. Filters were created so users can specify specific dates, cities, states, countries and shapes of UFOs.

## Results
The resulting web page presented a stylized table that initially holds the data of every UFO sighting logged in our javascript file (as shown below).

 ![Unfiltered](/static/images/unfiltered_page.PNG)
 
It's immediately evident that, while exciting, the number of sightings logged in the initial table is too great to easily make sense of. For this reason, we inserted HTML forms able to receive user input and inserted javascript to filter through the table upon interaction and return only entries that match our users desired criteria. For example, when 'ca' for California, US, is inputted as the state of choice, you can see that the number of entries is narrowed down to a much more approachable amount of data. 

 ![Filtered California,  US](/static/images/filtered_ca.PNG)
 
 Even still, this table can be filtered down further if users were to specify another criterion such as UFO shape. As you can see below, if someone wanted to only view the triangular UFOs sighted in California, only seven entries are left. This is both easier to analyze and efficient in that it cuts out the noise of sightings irrelevant to a user's specific interests. 

 ![Filtered California,  US, triangle](/static/images/filtered_ca_triangle.PNG)
 
## Summary

### Drawbacks
While the current web page effectively displays the data on UFO citings and narrowing it down based on specific user input, this system is admittedly limited in its scope due to the fact that our filtering system relies on matching the exact string inputted in the filter form. This fails to account for user error; should they misspell the city they are searching for, no results would be returned regardless of whether there were actually entries for the city. Additionally, the reliance on matching a specific string does not allow for users to search for entries within ranges (for example, sightings between 1/1/2010 -1/10/2010) or within multiple categories (for example, within both California and Arizona).

### Reccomendations
I would recommend further development on the filtering system to account for common misspellings of filter criteria. The solution may come in the form of a filter system that not only checks if a given property is exactly equal to the value entered by the user but also if it is equal to stored common spelling errors or contains a certain percentage of characters that match. Another possible solution could be to provide drop-down options for the user that provide the possible filter options and narrow down as they enter characters to guide them to the available filter values. 

A second recommendation would be to allow users to enter or select multiple values within a given filter category. One potential method of providing this functionality could be to automate the insertion of an additional filter form below whichever form a user just used to provide the option of entering a second filtering criteria. For example, if a user entered 'ca' into the filter by state form, a second filter by state form could automatically pop up below the first to allow them to include more states. Alternatively, the drop-down menu mentioned previously could be used to provide this additional functionality if each available option was presented with a selection box and users were able to select as many options as they wanted. 

This webpage has provided Dana with the ability to efficiently narrow down her data to given criteria within each category in an approachable way. This can be easily built upon to increase the functionality and flexibility of the filters or quickly applied to alternate sets of data in the future.