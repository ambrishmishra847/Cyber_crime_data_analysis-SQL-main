// Cybersecurity case records used by the interactive SQL dashboard.
// Keep this file beside index.html because the page loads it with a relative script tag.
(function loadCybersecurityDataset(globalScope) {
    const cyberCrimeCases = [
    {
        "Year":  2022,
        "Day":  22,
        "Amount_Lost_INR":  86530,
        "Incident_Type":  "Data Breach",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  21,
        "Amount_Lost_INR":  231983,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  6,
        "Amount_Lost_INR":  284707,
        "Incident_Type":  "Data Breach",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  433557,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  23,
        "Amount_Lost_INR":  378816,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  16,
        "Amount_Lost_INR":  399992,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  4,
        "Amount_Lost_INR":  430660,
        "Incident_Type":  "Online Fraud",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  11,
        "Amount_Lost_INR":  463132,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  24,
        "Amount_Lost_INR":  402927,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  23,
        "Amount_Lost_INR":  206390,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  9,
        "Amount_Lost_INR":  346114,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  23,
        "Amount_Lost_INR":  244373,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  3,
        "Amount_Lost_INR":  348697,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  19,
        "Amount_Lost_INR":  162779,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  8,
        "Amount_Lost_INR":  171182,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  5,
        "Amount_Lost_INR":  193860,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  83879,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  433043,
        "Incident_Type":  "Identity Theft",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  6,
        "Amount_Lost_INR":  239260,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  2,
        "Amount_Lost_INR":  399871,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  308003,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  28,
        "Amount_Lost_INR":  447841,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  11,
        "Amount_Lost_INR":  315242,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  4,
        "Amount_Lost_INR":  147323,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  15,
        "Amount_Lost_INR":  123413,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  263670,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  22,
        "Amount_Lost_INR":  331904,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  48837,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  24,
        "Amount_Lost_INR":  261550,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  6,
        "Amount_Lost_INR":  274680,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  19,
        "Amount_Lost_INR":  29541,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  25,
        "Amount_Lost_INR":  80083,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  2,
        "Amount_Lost_INR":  445243,
        "Incident_Type":  "Identity Theft",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  15,
        "Amount_Lost_INR":  35531,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  11,
        "Amount_Lost_INR":  271856,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  367245,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  26,
        "Amount_Lost_INR":  328599,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  19,
        "Amount_Lost_INR":  75744,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  13,
        "Amount_Lost_INR":  253859,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  12,
        "Amount_Lost_INR":  130749,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  5,
        "Amount_Lost_INR":  268253,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  6,
        "Amount_Lost_INR":  312412,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  26,
        "Amount_Lost_INR":  232809,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  22,
        "Amount_Lost_INR":  317759,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  4,
        "Amount_Lost_INR":  83503,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  19,
        "Amount_Lost_INR":  255346,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  20,
        "Amount_Lost_INR":  423975,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  1,
        "Amount_Lost_INR":  86708,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  20,
        "Amount_Lost_INR":  192184,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  103471,
        "Incident_Type":  "Data Breach",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  12,
        "Amount_Lost_INR":  255225,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  15,
        "Amount_Lost_INR":  158661,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  162087,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  26,
        "Amount_Lost_INR":  161081,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  14,
        "Amount_Lost_INR":  346453,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  389590,
        "Incident_Type":  "Identity Theft",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  5,
        "Amount_Lost_INR":  194118,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  11,
        "Amount_Lost_INR":  369805,
        "Incident_Type":  "Online Fraud",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  4,
        "Amount_Lost_INR":  158215,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  13,
        "Amount_Lost_INR":  7154,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  11,
        "Amount_Lost_INR":  153876,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  3,
        "Amount_Lost_INR":  435904,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  1,
        "Amount_Lost_INR":  65288,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  52195,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  18,
        "Amount_Lost_INR":  283725,
        "Incident_Type":  "Malware",
        "City":  "Ahmedabad",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  24,
        "Amount_Lost_INR":  446864,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  10,
        "Amount_Lost_INR":  293231,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  5,
        "Amount_Lost_INR":  182002,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  23,
        "Amount_Lost_INR":  165053,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  10,
        "Amount_Lost_INR":  70298,
        "Incident_Type":  "Malware",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  12,
        "Amount_Lost_INR":  309311,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  2,
        "Amount_Lost_INR":  207376,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  437624,
        "Incident_Type":  "Identity Theft",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  40499,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  2,
        "Amount_Lost_INR":  388960,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  446485,
        "Incident_Type":  "Data Breach",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  170631,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  5,
        "Amount_Lost_INR":  246198,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  9,
        "Amount_Lost_INR":  468535,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  17,
        "Amount_Lost_INR":  243997,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  9,
        "Amount_Lost_INR":  489533,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  11,
        "Amount_Lost_INR":  97347,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  15,
        "Amount_Lost_INR":  311931,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  298632,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  337585,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  23,
        "Amount_Lost_INR":  206735,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  3,
        "Amount_Lost_INR":  23431,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  17,
        "Amount_Lost_INR":  324825,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  5,
        "Amount_Lost_INR":  195555,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  28,
        "Amount_Lost_INR":  123720,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  12,
        "Amount_Lost_INR":  50153,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  18,
        "Amount_Lost_INR":  269512,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  14,
        "Amount_Lost_INR":  421640,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  21,
        "Amount_Lost_INR":  375504,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  24,
        "Amount_Lost_INR":  177076,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  11,
        "Amount_Lost_INR":  478085,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  9,
        "Amount_Lost_INR":  220724,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  2,
        "Amount_Lost_INR":  375899,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  12,
        "Amount_Lost_INR":  57985,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  3,
        "Amount_Lost_INR":  313213,
        "Incident_Type":  "Hacking",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  3,
        "Amount_Lost_INR":  315470,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  1,
        "Amount_Lost_INR":  109737,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  8,
        "Amount_Lost_INR":  213133,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  22,
        "Amount_Lost_INR":  155470,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  28,
        "Amount_Lost_INR":  230465,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  51861,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  11,
        "Amount_Lost_INR":  339041,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  9,
        "Amount_Lost_INR":  213977,
        "Incident_Type":  "Online Fraud",
        "City":  "Pune",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  5,
        "Amount_Lost_INR":  128118,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  14,
        "Amount_Lost_INR":  331721,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  28,
        "Amount_Lost_INR":  197713,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  3,
        "Amount_Lost_INR":  10078,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  21,
        "Amount_Lost_INR":  419219,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  5,
        "Amount_Lost_INR":  325912,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  5,
        "Amount_Lost_INR":  52047,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  19,
        "Amount_Lost_INR":  334770,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  27,
        "Amount_Lost_INR":  320804,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  14,
        "Amount_Lost_INR":  236458,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  26,
        "Amount_Lost_INR":  444002,
        "Incident_Type":  "Data Breach",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  4,
        "Amount_Lost_INR":  396141,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  25,
        "Amount_Lost_INR":  216048,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  13,
        "Amount_Lost_INR":  237293,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  10,
        "Amount_Lost_INR":  118832,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  25,
        "Amount_Lost_INR":  393550,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  18,
        "Amount_Lost_INR":  126150,
        "Incident_Type":  "Online Fraud",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  158087,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  34320,
        "Incident_Type":  "Online Fraud",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  7,
        "Amount_Lost_INR":  328025,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  8,
        "Amount_Lost_INR":  91827,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  14,
        "Amount_Lost_INR":  365359,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  19,
        "Amount_Lost_INR":  420505,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  260931,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  1,
        "Amount_Lost_INR":  397605,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  23,
        "Amount_Lost_INR":  419899,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  407845,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  1,
        "Amount_Lost_INR":  324694,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  25,
        "Amount_Lost_INR":  25826,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  17,
        "Amount_Lost_INR":  101734,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  1,
        "Amount_Lost_INR":  158702,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  230834,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  23,
        "Amount_Lost_INR":  178235,
        "Incident_Type":  "Online Fraud",
        "City":  "Kolkata",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  99511,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  14,
        "Amount_Lost_INR":  460651,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  21,
        "Amount_Lost_INR":  274797,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  8,
        "Amount_Lost_INR":  160033,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  8,
        "Amount_Lost_INR":  82941,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  19,
        "Amount_Lost_INR":  206209,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  7,
        "Amount_Lost_INR":  296806,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  19,
        "Amount_Lost_INR":  99818,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  450662,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  153360,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  3,
        "Amount_Lost_INR":  254627,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  7,
        "Amount_Lost_INR":  96081,
        "Incident_Type":  "Identity Theft",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  19,
        "Amount_Lost_INR":  37877,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  374706,
        "Incident_Type":  "Online Fraud",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  10,
        "Amount_Lost_INR":  409529,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  20,
        "Amount_Lost_INR":  212957,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  73715,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Hyderabad",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  15,
        "Amount_Lost_INR":  142398,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  1,
        "Amount_Lost_INR":  111091,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  20,
        "Amount_Lost_INR":  133632,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  7,
        "Amount_Lost_INR":  342292,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  27,
        "Amount_Lost_INR":  84186,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  420961,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  6,
        "Amount_Lost_INR":  163962,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  25,
        "Amount_Lost_INR":  152094,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  1,
        "Amount_Lost_INR":  386773,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  5,
        "Amount_Lost_INR":  446795,
        "Incident_Type":  "Identity Theft",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  71316,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  23,
        "Amount_Lost_INR":  478063,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  1,
        "Amount_Lost_INR":  29380,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  4,
        "Amount_Lost_INR":  111198,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  22,
        "Amount_Lost_INR":  265500,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  2,
        "Amount_Lost_INR":  71326,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  10,
        "Amount_Lost_INR":  355591,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  5,
        "Amount_Lost_INR":  115994,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  221971,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  10,
        "Amount_Lost_INR":  283193,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  1,
        "Amount_Lost_INR":  469933,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  22,
        "Amount_Lost_INR":  368505,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  6,
        "Amount_Lost_INR":  279226,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  13,
        "Amount_Lost_INR":  263805,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  169484,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  266064,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  13,
        "Amount_Lost_INR":  485410,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  24,
        "Amount_Lost_INR":  246378,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  454531,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  24,
        "Amount_Lost_INR":  342705,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  272090,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  226314,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  439716,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  236612,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  279453,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  12,
        "Amount_Lost_INR":  56230,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  13,
        "Amount_Lost_INR":  374966,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  2,
        "Amount_Lost_INR":  492872,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  424243,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  19,
        "Amount_Lost_INR":  466757,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  19,
        "Amount_Lost_INR":  375484,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  60321,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  4,
        "Amount_Lost_INR":  133028,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  26,
        "Amount_Lost_INR":  232447,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  11,
        "Amount_Lost_INR":  337275,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  27,
        "Amount_Lost_INR":  442124,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  5,
        "Amount_Lost_INR":  472555,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  20,
        "Amount_Lost_INR":  289107,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  11,
        "Amount_Lost_INR":  102757,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  10,
        "Amount_Lost_INR":  433659,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  362403,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  6,
        "Amount_Lost_INR":  302207,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  6,
        "Amount_Lost_INR":  377369,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  8,
        "Amount_Lost_INR":  379544,
        "Incident_Type":  "Malware",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  23,
        "Amount_Lost_INR":  343962,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  267847,
        "Incident_Type":  "Identity Theft",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  26,
        "Amount_Lost_INR":  197200,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  14,
        "Amount_Lost_INR":  73099,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  11,
        "Amount_Lost_INR":  420065,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  12,
        "Amount_Lost_INR":  163932,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  32585,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  13,
        "Amount_Lost_INR":  416231,
        "Incident_Type":  "Data Breach",
        "City":  "Chennai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  471755,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  18,
        "Amount_Lost_INR":  44585,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Ahmedabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  25,
        "Amount_Lost_INR":  290102,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  1,
        "Amount_Lost_INR":  289161,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  470923,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  387821,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  28,
        "Amount_Lost_INR":  439566,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  11,
        "Amount_Lost_INR":  406417,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  12,
        "Amount_Lost_INR":  292570,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  12,
        "Amount_Lost_INR":  280922,
        "Incident_Type":  "Identity Theft",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  177313,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  16,
        "Amount_Lost_INR":  43229,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  4,
        "Amount_Lost_INR":  87652,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  391411,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  24,
        "Amount_Lost_INR":  250474,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  5,
        "Amount_Lost_INR":  180436,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  8,
        "Amount_Lost_INR":  493049,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  10,
        "Amount_Lost_INR":  389647,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  17,
        "Amount_Lost_INR":  261116,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  28,
        "Amount_Lost_INR":  348022,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  26,
        "Amount_Lost_INR":  320200,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  9,
        "Amount_Lost_INR":  421706,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  22,
        "Amount_Lost_INR":  20975,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  19,
        "Amount_Lost_INR":  158795,
        "Incident_Type":  "Data Breach",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  14,
        "Amount_Lost_INR":  417495,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  8,
        "Amount_Lost_INR":  210373,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  9,
        "Amount_Lost_INR":  405777,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  22,
        "Amount_Lost_INR":  198133,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  11,
        "Amount_Lost_INR":  351541,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  23,
        "Amount_Lost_INR":  181225,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  1,
        "Amount_Lost_INR":  296286,
        "Incident_Type":  "Data Breach",
        "City":  "Bangalore",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  14,
        "Amount_Lost_INR":  290060,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  5,
        "Amount_Lost_INR":  65324,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  21,
        "Amount_Lost_INR":  177037,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  389076,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  14,
        "Amount_Lost_INR":  136720,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2021,
        "Day":  4,
        "Amount_Lost_INR":  167205,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  22,
        "Amount_Lost_INR":  444893,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  23,
        "Amount_Lost_INR":  97059,
        "Incident_Type":  "Online Fraud",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  25,
        "Amount_Lost_INR":  488804,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  1,
        "Amount_Lost_INR":  494166,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  22,
        "Amount_Lost_INR":  99317,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  23,
        "Amount_Lost_INR":  202207,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  19,
        "Amount_Lost_INR":  298190,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  441280,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  102459,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  21,
        "Amount_Lost_INR":  238697,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  15,
        "Amount_Lost_INR":  201422,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  9,
        "Amount_Lost_INR":  309037,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  21,
        "Amount_Lost_INR":  102520,
        "Incident_Type":  "Malware",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  9,
        "Amount_Lost_INR":  388962,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  10,
        "Amount_Lost_INR":  62272,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  20,
        "Amount_Lost_INR":  224224,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  25,
        "Amount_Lost_INR":  330793,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  21,
        "Amount_Lost_INR":  327818,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  26,
        "Amount_Lost_INR":  145832,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  9,
        "Amount_Lost_INR":  153999,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  349619,
        "Incident_Type":  "Identity Theft",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  20,
        "Amount_Lost_INR":  62367,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  25,
        "Amount_Lost_INR":  230027,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  26,
        "Amount_Lost_INR":  406804,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  11,
        "Amount_Lost_INR":  384894,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  233750,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  2,
        "Amount_Lost_INR":  236806,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  7,
        "Amount_Lost_INR":  381298,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  18,
        "Amount_Lost_INR":  184305,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  27,
        "Amount_Lost_INR":  45738,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  2,
        "Amount_Lost_INR":  34397,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  27,
        "Amount_Lost_INR":  345333,
        "Incident_Type":  "Online Fraud",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  339511,
        "Incident_Type":  "Identity Theft",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  11,
        "Amount_Lost_INR":  203332,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  27,
        "Amount_Lost_INR":  383729,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  12,
        "Amount_Lost_INR":  339763,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  27,
        "Amount_Lost_INR":  112453,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  19,
        "Amount_Lost_INR":  20816,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  22,
        "Amount_Lost_INR":  436456,
        "Incident_Type":  "Identity Theft",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  400492,
        "Incident_Type":  "Online Fraud",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  25,
        "Amount_Lost_INR":  246011,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  7,
        "Amount_Lost_INR":  498415,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  20,
        "Amount_Lost_INR":  342674,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  417715,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  21,
        "Amount_Lost_INR":  482792,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  24,
        "Amount_Lost_INR":  372000,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  1,
        "Amount_Lost_INR":  214567,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  72635,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  11,
        "Amount_Lost_INR":  370947,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  22,
        "Amount_Lost_INR":  217184,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  299090,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  28,
        "Amount_Lost_INR":  318348,
        "Incident_Type":  "Identity Theft",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  18,
        "Amount_Lost_INR":  183958,
        "Incident_Type":  "Hacking",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  21,
        "Amount_Lost_INR":  465868,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  278707,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  7,
        "Amount_Lost_INR":  93324,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  224536,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  20,
        "Amount_Lost_INR":  233944,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  9,
        "Amount_Lost_INR":  272991,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  27155,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  20,
        "Amount_Lost_INR":  342815,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  22,
        "Amount_Lost_INR":  117891,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  22,
        "Amount_Lost_INR":  346454,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  28,
        "Amount_Lost_INR":  461494,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  8,
        "Amount_Lost_INR":  150381,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  132691,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  7,
        "Amount_Lost_INR":  477410,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  1,
        "Amount_Lost_INR":  444324,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  13,
        "Amount_Lost_INR":  35707,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  23,
        "Amount_Lost_INR":  414553,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  344681,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  27,
        "Amount_Lost_INR":  198576,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  179686,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  223500,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Kolkata",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  17,
        "Amount_Lost_INR":  354299,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  13,
        "Amount_Lost_INR":  263425,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  16,
        "Amount_Lost_INR":  159492,
        "Incident_Type":  "Hacking",
        "City":  "Jaipur",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  475112,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  19,
        "Amount_Lost_INR":  171102,
        "Incident_Type":  "Identity Theft",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  18,
        "Amount_Lost_INR":  395274,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  218285,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  14,
        "Amount_Lost_INR":  339404,
        "Incident_Type":  "Online Fraud",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  160476,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  235554,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  18,
        "Amount_Lost_INR":  499500,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  2,
        "Amount_Lost_INR":  161928,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  22,
        "Amount_Lost_INR":  141272,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  28,
        "Amount_Lost_INR":  327322,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  297141,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  18,
        "Amount_Lost_INR":  419827,
        "Incident_Type":  "Identity Theft",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  6,
        "Amount_Lost_INR":  120273,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  19,
        "Amount_Lost_INR":  173307,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  4,
        "Amount_Lost_INR":  249500,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  1,
        "Amount_Lost_INR":  167129,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  133311,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  23,
        "Amount_Lost_INR":  235746,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  7,
        "Amount_Lost_INR":  246546,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  3,
        "Amount_Lost_INR":  197733,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  10,
        "Amount_Lost_INR":  127945,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  10,
        "Amount_Lost_INR":  46272,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  352537,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2021,
        "Day":  14,
        "Amount_Lost_INR":  324356,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  2,
        "Amount_Lost_INR":  147470,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  28,
        "Amount_Lost_INR":  121030,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Kolkata",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  1,
        "Amount_Lost_INR":  319647,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  23,
        "Amount_Lost_INR":  400854,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  23,
        "Amount_Lost_INR":  7570,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  28,
        "Amount_Lost_INR":  331929,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  18,
        "Amount_Lost_INR":  10110,
        "Incident_Type":  "Identity Theft",
        "City":  "Ahmedabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2021,
        "Day":  7,
        "Amount_Lost_INR":  80141,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  13115,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  1,
        "Amount_Lost_INR":  40062,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  25,
        "Amount_Lost_INR":  286055,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  23,
        "Amount_Lost_INR":  105061,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  3,
        "Amount_Lost_INR":  295700,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  24,
        "Amount_Lost_INR":  472347,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  23,
        "Amount_Lost_INR":  391479,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  2969,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  8,
        "Amount_Lost_INR":  306897,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  22,
        "Amount_Lost_INR":  477027,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  25,
        "Amount_Lost_INR":  398686,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  15,
        "Amount_Lost_INR":  122863,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  273369,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  3,
        "Amount_Lost_INR":  124008,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  19,
        "Amount_Lost_INR":  155268,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  1,
        "Amount_Lost_INR":  106823,
        "Incident_Type":  "Online Fraud",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  28,
        "Amount_Lost_INR":  276813,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  431596,
        "Incident_Type":  "Identity Theft",
        "City":  "Ahmedabad",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  8,
        "Amount_Lost_INR":  387542,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  111677,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  247958,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  24,
        "Amount_Lost_INR":  49320,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  14,
        "Amount_Lost_INR":  441630,
        "Incident_Type":  "Online Fraud",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  24,
        "Amount_Lost_INR":  497758,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  14,
        "Amount_Lost_INR":  147649,
        "Incident_Type":  "Identity Theft",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  11,
        "Amount_Lost_INR":  126354,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  16,
        "Amount_Lost_INR":  89009,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  4,
        "Amount_Lost_INR":  258437,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  20,
        "Amount_Lost_INR":  449625,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  29625,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  22,
        "Amount_Lost_INR":  213112,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  21,
        "Amount_Lost_INR":  287233,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  14,
        "Amount_Lost_INR":  37487,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  23,
        "Amount_Lost_INR":  460054,
        "Incident_Type":  "Malware",
        "City":  "Ahmedabad",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  16,
        "Amount_Lost_INR":  229071,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  18,
        "Amount_Lost_INR":  373592,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  7,
        "Amount_Lost_INR":  489011,
        "Incident_Type":  "Identity Theft",
        "City":  "Ahmedabad",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  10,
        "Amount_Lost_INR":  313282,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  7,
        "Amount_Lost_INR":  174895,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  1,
        "Amount_Lost_INR":  431424,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  23,
        "Amount_Lost_INR":  317205,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  21,
        "Amount_Lost_INR":  424875,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  19,
        "Amount_Lost_INR":  102376,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  16,
        "Amount_Lost_INR":  426106,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  19,
        "Amount_Lost_INR":  342278,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  4,
        "Amount_Lost_INR":  310199,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  28,
        "Amount_Lost_INR":  244341,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  18,
        "Amount_Lost_INR":  282652,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  2,
        "Amount_Lost_INR":  436503,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  1,
        "Amount_Lost_INR":  473132,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  15,
        "Amount_Lost_INR":  159056,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  5,
        "Amount_Lost_INR":  111169,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  271269,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  11,
        "Amount_Lost_INR":  37059,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  10,
        "Amount_Lost_INR":  463785,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  104409,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  3,
        "Amount_Lost_INR":  411303,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  23,
        "Amount_Lost_INR":  6704,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  23,
        "Amount_Lost_INR":  454792,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  12,
        "Amount_Lost_INR":  205456,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  20,
        "Amount_Lost_INR":  219200,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  5,
        "Amount_Lost_INR":  112279,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  466676,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  6,
        "Amount_Lost_INR":  159280,
        "Incident_Type":  "Data Breach",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  9,
        "Amount_Lost_INR":  119516,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  2,
        "Amount_Lost_INR":  479366,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  21,
        "Amount_Lost_INR":  198096,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  12,
        "Amount_Lost_INR":  434098,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  3,
        "Amount_Lost_INR":  420139,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  20,
        "Amount_Lost_INR":  377188,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  26,
        "Amount_Lost_INR":  233549,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  22,
        "Amount_Lost_INR":  30165,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  12,
        "Amount_Lost_INR":  68203,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  24,
        "Amount_Lost_INR":  485965,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  267258,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  10,
        "Amount_Lost_INR":  459181,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  24,
        "Amount_Lost_INR":  37321,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  336441,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  14,
        "Amount_Lost_INR":  359796,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  23,
        "Amount_Lost_INR":  362448,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  246014,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  18,
        "Amount_Lost_INR":  157498,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  18772,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  17,
        "Amount_Lost_INR":  366898,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  14,
        "Amount_Lost_INR":  266856,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  9,
        "Amount_Lost_INR":  395583,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  239389,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  116142,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  92736,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  25,
        "Amount_Lost_INR":  52924,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  7,
        "Amount_Lost_INR":  4726,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  9,
        "Amount_Lost_INR":  352296,
        "Incident_Type":  "Hacking",
        "City":  "Jaipur",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  22,
        "Amount_Lost_INR":  28723,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  22,
        "Amount_Lost_INR":  390113,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  11,
        "Amount_Lost_INR":  235182,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  14,
        "Amount_Lost_INR":  363638,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  4,
        "Amount_Lost_INR":  141180,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  209786,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  36643,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  13,
        "Amount_Lost_INR":  163396,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  367040,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  23,
        "Amount_Lost_INR":  215432,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  5,
        "Amount_Lost_INR":  140999,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  11,
        "Amount_Lost_INR":  356824,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  359690,
        "Incident_Type":  "Identity Theft",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  18,
        "Amount_Lost_INR":  416659,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  21,
        "Amount_Lost_INR":  80973,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  10,
        "Amount_Lost_INR":  326593,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  4,
        "Amount_Lost_INR":  110834,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  9,
        "Amount_Lost_INR":  237386,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  470959,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  2,
        "Amount_Lost_INR":  454449,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  288681,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  5,
        "Amount_Lost_INR":  495509,
        "Incident_Type":  "Identity Theft",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  25,
        "Amount_Lost_INR":  340720,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  108522,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  26,
        "Amount_Lost_INR":  23612,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  12,
        "Amount_Lost_INR":  226049,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  23,
        "Amount_Lost_INR":  269615,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  21,
        "Amount_Lost_INR":  167703,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  10,
        "Amount_Lost_INR":  241069,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  22,
        "Amount_Lost_INR":  224131,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Hyderabad",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  21,
        "Amount_Lost_INR":  32348,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  27,
        "Amount_Lost_INR":  196804,
        "Incident_Type":  "Data Breach",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  25,
        "Amount_Lost_INR":  264321,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  136832,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  295923,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  8,
        "Amount_Lost_INR":  284780,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  2,
        "Amount_Lost_INR":  82889,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  12,
        "Amount_Lost_INR":  54551,
        "Incident_Type":  "Data Breach",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  405772,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  25,
        "Amount_Lost_INR":  421814,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  21,
        "Amount_Lost_INR":  143635,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  7,
        "Amount_Lost_INR":  47819,
        "Incident_Type":  "Online Fraud",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  10,
        "Amount_Lost_INR":  336914,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  13,
        "Amount_Lost_INR":  485271,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  421182,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  213781,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  21,
        "Amount_Lost_INR":  454105,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  28,
        "Amount_Lost_INR":  159059,
        "Incident_Type":  "Identity Theft",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  26,
        "Amount_Lost_INR":  341858,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  14,
        "Amount_Lost_INR":  499090,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  190420,
        "Incident_Type":  "Online Fraud",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  28,
        "Amount_Lost_INR":  25596,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  22,
        "Amount_Lost_INR":  427390,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  11,
        "Amount_Lost_INR":  327250,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  1,
        "Amount_Lost_INR":  464183,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  19,
        "Amount_Lost_INR":  60182,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  21,
        "Amount_Lost_INR":  487516,
        "Incident_Type":  "Data Breach",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  4,
        "Amount_Lost_INR":  350307,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  19,
        "Amount_Lost_INR":  302454,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  26,
        "Amount_Lost_INR":  319232,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  21,
        "Amount_Lost_INR":  129803,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  11,
        "Amount_Lost_INR":  140978,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  300058,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  11,
        "Amount_Lost_INR":  373494,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  4,
        "Amount_Lost_INR":  46379,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  472828,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  246900,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2021,
        "Day":  7,
        "Amount_Lost_INR":  259517,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  431866,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  3,
        "Amount_Lost_INR":  441097,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  22,
        "Amount_Lost_INR":  309557,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  2,
        "Amount_Lost_INR":  138084,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Kolkata",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  23,
        "Amount_Lost_INR":  182187,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  270295,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  24,
        "Amount_Lost_INR":  58716,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  22,
        "Amount_Lost_INR":  356891,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  22,
        "Amount_Lost_INR":  224725,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  5,
        "Amount_Lost_INR":  168450,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  24,
        "Amount_Lost_INR":  174724,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  204502,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  26,
        "Amount_Lost_INR":  145539,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  4,
        "Amount_Lost_INR":  425226,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  15,
        "Amount_Lost_INR":  122999,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  115793,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  19,
        "Amount_Lost_INR":  448907,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  3,
        "Amount_Lost_INR":  458373,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  20,
        "Amount_Lost_INR":  371321,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  11,
        "Amount_Lost_INR":  13289,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  17,
        "Amount_Lost_INR":  177048,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  175668,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  13,
        "Amount_Lost_INR":  417387,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  11,
        "Amount_Lost_INR":  232513,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  258368,
        "Incident_Type":  "Hacking",
        "City":  "Jaipur",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  9,
        "Amount_Lost_INR":  87365,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  231662,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  377158,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  21,
        "Amount_Lost_INR":  176211,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  9,
        "Amount_Lost_INR":  180785,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  9,
        "Amount_Lost_INR":  423950,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  8,
        "Amount_Lost_INR":  73588,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  64646,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  1,
        "Amount_Lost_INR":  266798,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  25,
        "Amount_Lost_INR":  483238,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  11,
        "Amount_Lost_INR":  281887,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  8,
        "Amount_Lost_INR":  311512,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  10,
        "Amount_Lost_INR":  222097,
        "Incident_Type":  "Online Fraud",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  25,
        "Amount_Lost_INR":  206244,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  7,
        "Amount_Lost_INR":  400657,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  3,
        "Amount_Lost_INR":  120735,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  3,
        "Amount_Lost_INR":  156683,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  18,
        "Amount_Lost_INR":  383035,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  5,
        "Amount_Lost_INR":  108971,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  12,
        "Amount_Lost_INR":  13149,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  12,
        "Amount_Lost_INR":  363246,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  19,
        "Amount_Lost_INR":  322333,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  239976,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  2,
        "Amount_Lost_INR":  415891,
        "Incident_Type":  "Data Breach",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  12,
        "Amount_Lost_INR":  334175,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  19,
        "Amount_Lost_INR":  43668,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  407889,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  12,
        "Amount_Lost_INR":  470882,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  89204,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  27,
        "Amount_Lost_INR":  212830,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  17,
        "Amount_Lost_INR":  197501,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  417885,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  10,
        "Amount_Lost_INR":  166140,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  25,
        "Amount_Lost_INR":  220861,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  23,
        "Amount_Lost_INR":  141507,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  226160,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  184321,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  12,
        "Amount_Lost_INR":  38384,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  16,
        "Amount_Lost_INR":  82929,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  24,
        "Amount_Lost_INR":  391103,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  19,
        "Amount_Lost_INR":  77153,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  236128,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  21,
        "Amount_Lost_INR":  76388,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  32401,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  23,
        "Amount_Lost_INR":  203903,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  5,
        "Amount_Lost_INR":  120503,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  22,
        "Amount_Lost_INR":  233601,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  16,
        "Amount_Lost_INR":  128834,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  6,
        "Amount_Lost_INR":  35084,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  252459,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  25,
        "Amount_Lost_INR":  111641,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  18,
        "Amount_Lost_INR":  106111,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  25,
        "Amount_Lost_INR":  450042,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  12,
        "Amount_Lost_INR":  430667,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  15,
        "Amount_Lost_INR":  139299,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  27,
        "Amount_Lost_INR":  163982,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  26,
        "Amount_Lost_INR":  299185,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  9,
        "Amount_Lost_INR":  352064,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  13,
        "Amount_Lost_INR":  328825,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  26,
        "Amount_Lost_INR":  235386,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  15,
        "Amount_Lost_INR":  344715,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  10,
        "Amount_Lost_INR":  197553,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  16,
        "Amount_Lost_INR":  462792,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  7,
        "Amount_Lost_INR":  261337,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  128556,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  23,
        "Amount_Lost_INR":  196246,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  26,
        "Amount_Lost_INR":  27160,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  21,
        "Amount_Lost_INR":  247242,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  22,
        "Amount_Lost_INR":  18633,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  26,
        "Amount_Lost_INR":  489096,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  7,
        "Amount_Lost_INR":  280158,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  14,
        "Amount_Lost_INR":  343676,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  15,
        "Amount_Lost_INR":  50104,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  21,
        "Amount_Lost_INR":  435837,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  7,
        "Amount_Lost_INR":  340375,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  9,
        "Amount_Lost_INR":  69388,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  17014,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  16,
        "Amount_Lost_INR":  93578,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  8,
        "Amount_Lost_INR":  165827,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  18,
        "Amount_Lost_INR":  41390,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  27,
        "Amount_Lost_INR":  286855,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  23,
        "Amount_Lost_INR":  92658,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2021,
        "Day":  18,
        "Amount_Lost_INR":  58993,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  20,
        "Amount_Lost_INR":  206768,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  7,
        "Amount_Lost_INR":  159285,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  3,
        "Amount_Lost_INR":  247860,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  18,
        "Amount_Lost_INR":  499172,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  452000,
        "Incident_Type":  "Online Fraud",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  10,
        "Amount_Lost_INR":  270565,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  7,
        "Amount_Lost_INR":  219008,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  493289,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  14,
        "Amount_Lost_INR":  18727,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  375562,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  3,
        "Amount_Lost_INR":  5358,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  12,
        "Amount_Lost_INR":  328252,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  28,
        "Amount_Lost_INR":  258681,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  95018,
        "Incident_Type":  "Data Breach",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  2,
        "Amount_Lost_INR":  387601,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  426333,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  5,
        "Amount_Lost_INR":  482916,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Ahmedabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  11,
        "Amount_Lost_INR":  295054,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  8,
        "Amount_Lost_INR":  127888,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  26,
        "Amount_Lost_INR":  230104,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  23,
        "Amount_Lost_INR":  318898,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  23,
        "Amount_Lost_INR":  194510,
        "Incident_Type":  "Online Fraud",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  12,
        "Amount_Lost_INR":  110847,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  7,
        "Amount_Lost_INR":  423587,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  15,
        "Amount_Lost_INR":  445717,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  24,
        "Amount_Lost_INR":  455162,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  301611,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  4,
        "Amount_Lost_INR":  411841,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  22,
        "Amount_Lost_INR":  297037,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  25,
        "Amount_Lost_INR":  77329,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  13,
        "Amount_Lost_INR":  32007,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  18,
        "Amount_Lost_INR":  485518,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  1,
        "Amount_Lost_INR":  171604,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  16,
        "Amount_Lost_INR":  317397,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  13,
        "Amount_Lost_INR":  13323,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  10,
        "Amount_Lost_INR":  374479,
        "Incident_Type":  "Malware",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  12,
        "Amount_Lost_INR":  113356,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  2,
        "Amount_Lost_INR":  111944,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  23,
        "Amount_Lost_INR":  205451,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  408426,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2021,
        "Day":  10,
        "Amount_Lost_INR":  279600,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  2,
        "Amount_Lost_INR":  32367,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  27,
        "Amount_Lost_INR":  55624,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  23,
        "Amount_Lost_INR":  404322,
        "Incident_Type":  "Data Breach",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  13,
        "Amount_Lost_INR":  235565,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  69008,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  18,
        "Amount_Lost_INR":  389070,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  3,
        "Amount_Lost_INR":  378539,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  117492,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  7,
        "Amount_Lost_INR":  73240,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  14,
        "Amount_Lost_INR":  327459,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  463465,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  202659,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  21,
        "Amount_Lost_INR":  273900,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  12,
        "Amount_Lost_INR":  462227,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  25,
        "Amount_Lost_INR":  299522,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  16,
        "Amount_Lost_INR":  136327,
        "Incident_Type":  "Data Breach",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  408700,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  12,
        "Amount_Lost_INR":  126703,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  15,
        "Amount_Lost_INR":  319693,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  25,
        "Amount_Lost_INR":  166575,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  10,
        "Amount_Lost_INR":  336938,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  25,
        "Amount_Lost_INR":  494948,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  7,
        "Amount_Lost_INR":  308257,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  499946,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Ahmedabad",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  5,
        "Amount_Lost_INR":  75069,
        "Incident_Type":  "Identity Theft",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  230189,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  399465,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  3,
        "Amount_Lost_INR":  252051,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  13,
        "Amount_Lost_INR":  413417,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  14,
        "Amount_Lost_INR":  126541,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  24,
        "Amount_Lost_INR":  190648,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  18,
        "Amount_Lost_INR":  257353,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  4,
        "Amount_Lost_INR":  272830,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  18,
        "Amount_Lost_INR":  316507,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  5,
        "Amount_Lost_INR":  360687,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  25,
        "Amount_Lost_INR":  132733,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  16,
        "Amount_Lost_INR":  176915,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  1,
        "Amount_Lost_INR":  96673,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  21,
        "Amount_Lost_INR":  455179,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  14,
        "Amount_Lost_INR":  43828,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  311748,
        "Incident_Type":  "Identity Theft",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  9,
        "Amount_Lost_INR":  273670,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  332054,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  26592,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  25,
        "Amount_Lost_INR":  292126,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  24,
        "Amount_Lost_INR":  263351,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  4,
        "Amount_Lost_INR":  233041,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  12,
        "Amount_Lost_INR":  351877,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  27,
        "Amount_Lost_INR":  231008,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2021,
        "Day":  26,
        "Amount_Lost_INR":  125982,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  5,
        "Amount_Lost_INR":  257911,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  69619,
        "Incident_Type":  "Identity Theft",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  11,
        "Amount_Lost_INR":  161400,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  28,
        "Amount_Lost_INR":  309623,
        "Incident_Type":  "Identity Theft",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  152175,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2022,
        "Day":  7,
        "Amount_Lost_INR":  171963,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  24,
        "Amount_Lost_INR":  142826,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  14,
        "Amount_Lost_INR":  232055,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  24,
        "Amount_Lost_INR":  344581,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  11,
        "Amount_Lost_INR":  99540,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  13,
        "Amount_Lost_INR":  336126,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  103747,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  25,
        "Amount_Lost_INR":  187994,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  7,
        "Amount_Lost_INR":  311375,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  20,
        "Amount_Lost_INR":  30301,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  4,
        "Amount_Lost_INR":  223724,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  194783,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  8,
        "Amount_Lost_INR":  173395,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  20,
        "Amount_Lost_INR":  19752,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  22,
        "Amount_Lost_INR":  492128,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  21,
        "Amount_Lost_INR":  214277,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  361596,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  13,
        "Amount_Lost_INR":  145467,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  14,
        "Amount_Lost_INR":  218029,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  10,
        "Amount_Lost_INR":  384381,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  11,
        "Amount_Lost_INR":  57273,
        "Incident_Type":  "Malware",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  2,
        "Amount_Lost_INR":  259503,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  25,
        "Amount_Lost_INR":  92878,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  26,
        "Amount_Lost_INR":  268039,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  9,
        "Amount_Lost_INR":  120968,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  378844,
        "Incident_Type":  "Data Breach",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  26,
        "Amount_Lost_INR":  77559,
        "Incident_Type":  "Identity Theft",
        "City":  "Hyderabad",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  3,
        "Amount_Lost_INR":  11699,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  24,
        "Amount_Lost_INR":  197133,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  10715,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  5,
        "Amount_Lost_INR":  20169,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  119413,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  22,
        "Amount_Lost_INR":  410379,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  120264,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  23,
        "Amount_Lost_INR":  268926,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  17,
        "Amount_Lost_INR":  220249,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  9,
        "Amount_Lost_INR":  125481,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  216400,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2021,
        "Day":  20,
        "Amount_Lost_INR":  36585,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  26,
        "Amount_Lost_INR":  293826,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  179936,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  27,
        "Amount_Lost_INR":  393136,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  10,
        "Amount_Lost_INR":  347560,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  3,
        "Amount_Lost_INR":  449330,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  18,
        "Amount_Lost_INR":  390954,
        "Incident_Type":  "Data Breach",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  18,
        "Amount_Lost_INR":  39067,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  17,
        "Amount_Lost_INR":  174757,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  24,
        "Amount_Lost_INR":  254334,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  19073,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  3,
        "Amount_Lost_INR":  37035,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  197049,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  13,
        "Amount_Lost_INR":  234782,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  24,
        "Amount_Lost_INR":  91373,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  346506,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  25,
        "Amount_Lost_INR":  91517,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  9,
        "Amount_Lost_INR":  66450,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  4,
        "Amount_Lost_INR":  11382,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  14,
        "Amount_Lost_INR":  398653,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  203043,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  2,
        "Amount_Lost_INR":  458828,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  11,
        "Amount_Lost_INR":  222427,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  9,
        "Amount_Lost_INR":  62929,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  24,
        "Amount_Lost_INR":  234483,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  3,
        "Amount_Lost_INR":  229590,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  27,
        "Amount_Lost_INR":  362008,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2023,
        "Day":  28,
        "Amount_Lost_INR":  144401,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  9,
        "Amount_Lost_INR":  257677,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  3,
        "Amount_Lost_INR":  288313,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  25,
        "Amount_Lost_INR":  88468,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  2,
        "Amount_Lost_INR":  35594,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  12,
        "Amount_Lost_INR":  471173,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  10,
        "Amount_Lost_INR":  192703,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  9,
        "Amount_Lost_INR":  46033,
        "Incident_Type":  "Data Breach",
        "City":  "Ahmedabad",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  15,
        "Amount_Lost_INR":  64133,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  8,
        "Amount_Lost_INR":  467381,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  25,
        "Amount_Lost_INR":  74861,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  5,
        "Amount_Lost_INR":  184362,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  11,
        "Amount_Lost_INR":  488247,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2019,
        "Day":  27,
        "Amount_Lost_INR":  294894,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  2,
        "Amount_Lost_INR":  489371,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  24,
        "Amount_Lost_INR":  41461,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  28,
        "Amount_Lost_INR":  468016,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Financial"
    },
    {
        "Year":  2023,
        "Day":  15,
        "Amount_Lost_INR":  79222,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  6,
        "Amount_Lost_INR":  113020,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  8,
        "Amount_Lost_INR":  287370,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  27,
        "Amount_Lost_INR":  269865,
        "Incident_Type":  "Identity Theft",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  5,
        "Amount_Lost_INR":  450370,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  16,
        "Amount_Lost_INR":  21609,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  446346,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  18,
        "Amount_Lost_INR":  131513,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  6,
        "Amount_Lost_INR":  204981,
        "Incident_Type":  "Hacking",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  5,
        "Amount_Lost_INR":  105211,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  28,
        "Amount_Lost_INR":  187321,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2024,
        "Day":  16,
        "Amount_Lost_INR":  443111,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  13,
        "Amount_Lost_INR":  488689,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  28,
        "Amount_Lost_INR":  399872,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  388009,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  337664,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  457956,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  18,
        "Amount_Lost_INR":  327453,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  30984,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  13,
        "Amount_Lost_INR":  119947,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  19,
        "Amount_Lost_INR":  205894,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  26,
        "Amount_Lost_INR":  6901,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  3,
        "Amount_Lost_INR":  163624,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  24,
        "Amount_Lost_INR":  223317,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  8,
        "Amount_Lost_INR":  294199,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  2,
        "Amount_Lost_INR":  169757,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  8,
        "Amount_Lost_INR":  468181,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  27,
        "Amount_Lost_INR":  146788,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  13,
        "Amount_Lost_INR":  115099,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  12138,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  1,
        "Amount_Lost_INR":  167370,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  6,
        "Amount_Lost_INR":  445328,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  24429,
        "Incident_Type":  "Hacking",
        "City":  "Jaipur",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  19,
        "Amount_Lost_INR":  51200,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  16,
        "Amount_Lost_INR":  203380,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  442460,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  28,
        "Amount_Lost_INR":  249289,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  246127,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  364412,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  27,
        "Amount_Lost_INR":  237513,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  16,
        "Amount_Lost_INR":  18347,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  9,
        "Amount_Lost_INR":  148992,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  32822,
        "Incident_Type":  "Hacking",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  11,
        "Amount_Lost_INR":  440875,
        "Incident_Type":  "Malware",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  13,
        "Amount_Lost_INR":  41108,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  25,
        "Amount_Lost_INR":  392099,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  21,
        "Amount_Lost_INR":  483315,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  10,
        "Amount_Lost_INR":  8967,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  373863,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  12871,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  6,
        "Amount_Lost_INR":  226371,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  28,
        "Amount_Lost_INR":  209524,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  7,
        "Amount_Lost_INR":  206342,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  5,
        "Amount_Lost_INR":  165685,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  11,
        "Amount_Lost_INR":  29179,
        "Incident_Type":  "Data Breach",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  252537,
        "Incident_Type":  "Phishing",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  26,
        "Amount_Lost_INR":  184260,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  25,
        "Amount_Lost_INR":  318243,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  19,
        "Amount_Lost_INR":  36262,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  23,
        "Amount_Lost_INR":  341357,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  10,
        "Amount_Lost_INR":  380551,
        "Incident_Type":  "Online Fraud",
        "City":  "Hyderabad",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  10,
        "Amount_Lost_INR":  412484,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  11,
        "Amount_Lost_INR":  472082,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  21,
        "Amount_Lost_INR":  349413,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  7,
        "Amount_Lost_INR":  61545,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  18,
        "Amount_Lost_INR":  235555,
        "Incident_Type":  "Identity Theft",
        "City":  "Ahmedabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  4,
        "Amount_Lost_INR":  224894,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  2,
        "Amount_Lost_INR":  204218,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  14,
        "Amount_Lost_INR":  466182,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  13,
        "Amount_Lost_INR":  303066,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  12,
        "Amount_Lost_INR":  473580,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  7,
        "Amount_Lost_INR":  43913,
        "Incident_Type":  "Ransomware",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  2,
        "Amount_Lost_INR":  360177,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  13,
        "Amount_Lost_INR":  367936,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  14,
        "Amount_Lost_INR":  251497,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  449893,
        "Incident_Type":  "Malware",
        "City":  "Hyderabad",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  496370,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2019,
        "Day":  9,
        "Amount_Lost_INR":  444057,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  17,
        "Amount_Lost_INR":  178404,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  8,
        "Amount_Lost_INR":  486278,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2021,
        "Day":  2,
        "Amount_Lost_INR":  383007,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  28,
        "Amount_Lost_INR":  489910,
        "Incident_Type":  "Identity Theft",
        "City":  "Ahmedabad",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  24,
        "Amount_Lost_INR":  157104,
        "Incident_Type":  "Identity Theft",
        "City":  "Hyderabad",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  13,
        "Amount_Lost_INR":  169918,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  191546,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2021,
        "Day":  16,
        "Amount_Lost_INR":  45936,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  6,
        "Amount_Lost_INR":  161866,
        "Incident_Type":  "Hacking",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  19,
        "Amount_Lost_INR":  193660,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  7,
        "Amount_Lost_INR":  203056,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  10,
        "Amount_Lost_INR":  444547,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  9,
        "Amount_Lost_INR":  226469,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  29141,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  28,
        "Amount_Lost_INR":  403290,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  28,
        "Amount_Lost_INR":  138478,
        "Incident_Type":  "Hacking",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  15,
        "Amount_Lost_INR":  98359,
        "Incident_Type":  "Malware",
        "City":  "Pune",
        "Category":  "E-commerce"
    },
    {
        "Year":  2024,
        "Day":  5,
        "Amount_Lost_INR":  386423,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  22,
        "Amount_Lost_INR":  155363,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  4,
        "Amount_Lost_INR":  42568,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  20,
        "Amount_Lost_INR":  98539,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  4,
        "Amount_Lost_INR":  47851,
        "Incident_Type":  "Hacking",
        "City":  "Jaipur",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  18,
        "Amount_Lost_INR":  494158,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  55823,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  24312,
        "Incident_Type":  "Ransomware",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  437324,
        "Incident_Type":  "Malware",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  12,
        "Amount_Lost_INR":  461134,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Corporate"
    },
    {
        "Year":  2020,
        "Day":  22,
        "Amount_Lost_INR":  428387,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  435995,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  10,
        "Amount_Lost_INR":  200900,
        "Incident_Type":  "Online Fraud",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  22,
        "Amount_Lost_INR":  361867,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  275555,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  22,
        "Amount_Lost_INR":  497037,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  26,
        "Amount_Lost_INR":  250062,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  320153,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  27,
        "Amount_Lost_INR":  409638,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  18,
        "Amount_Lost_INR":  436684,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  18,
        "Amount_Lost_INR":  33371,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Ahmedabad",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  14,
        "Amount_Lost_INR":  58022,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  15,
        "Amount_Lost_INR":  334373,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  12,
        "Amount_Lost_INR":  100071,
        "Incident_Type":  "Identity Theft",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2019,
        "Day":  4,
        "Amount_Lost_INR":  183268,
        "Incident_Type":  "Hacking",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  27,
        "Amount_Lost_INR":  474570,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  3,
        "Amount_Lost_INR":  359918,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  490626,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2022,
        "Day":  12,
        "Amount_Lost_INR":  289859,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  7,
        "Amount_Lost_INR":  290749,
        "Incident_Type":  "Malware",
        "City":  "Chennai",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  11,
        "Amount_Lost_INR":  100853,
        "Incident_Type":  "Malware",
        "City":  "Mumbai",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  32174,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  6,
        "Amount_Lost_INR":  404172,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2024,
        "Day":  15,
        "Amount_Lost_INR":  498660,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  15,
        "Amount_Lost_INR":  77373,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  19,
        "Amount_Lost_INR":  332396,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2020,
        "Day":  11,
        "Amount_Lost_INR":  194021,
        "Incident_Type":  "Identity Theft",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  26,
        "Amount_Lost_INR":  194718,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  23,
        "Amount_Lost_INR":  71017,
        "Incident_Type":  "Data Breach",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2021,
        "Day":  26,
        "Amount_Lost_INR":  64037,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  2,
        "Amount_Lost_INR":  90818,
        "Incident_Type":  "Identity Theft",
        "City":  "Jaipur",
        "Category":  "Corporate"
    },
    {
        "Year":  2024,
        "Day":  14,
        "Amount_Lost_INR":  7548,
        "Incident_Type":  "Malware",
        "City":  "Delhi",
        "Category":  "Health"
    },
    {
        "Year":  2021,
        "Day":  2,
        "Amount_Lost_INR":  117981,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  4,
        "Amount_Lost_INR":  235213,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  205366,
        "Incident_Type":  "Identity Theft",
        "City":  "Bangalore",
        "Category":  "Educational"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  155249,
        "Incident_Type":  "Identity Theft",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  287166,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  9,
        "Amount_Lost_INR":  107297,
        "Incident_Type":  "Identity Theft",
        "City":  "Mumbai",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  7,
        "Amount_Lost_INR":  137614,
        "Incident_Type":  "Phishing",
        "City":  "Hyderabad",
        "Category":  "Personal"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  223084,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  23,
        "Amount_Lost_INR":  490536,
        "Incident_Type":  "Malware",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  11,
        "Amount_Lost_INR":  61428,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Financial"
    },
    {
        "Year":  2022,
        "Day":  20,
        "Amount_Lost_INR":  154812,
        "Incident_Type":  "Online Fraud",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  322497,
        "Incident_Type":  "Data Breach",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  484569,
        "Incident_Type":  "Data Breach",
        "City":  "Pune",
        "Category":  "Educational"
    },
    {
        "Year":  2019,
        "Day":  14,
        "Amount_Lost_INR":  114132,
        "Incident_Type":  "Phishing",
        "City":  "Kolkata",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  20,
        "Amount_Lost_INR":  188604,
        "Incident_Type":  "Data Breach",
        "City":  "Hyderabad",
        "Category":  "Government"
    },
    {
        "Year":  2020,
        "Day":  22,
        "Amount_Lost_INR":  17052,
        "Incident_Type":  "Identity Theft",
        "City":  "Kolkata",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  11,
        "Amount_Lost_INR":  101689,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  179148,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2019,
        "Day":  3,
        "Amount_Lost_INR":  447636,
        "Incident_Type":  "Data Breach",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  17,
        "Amount_Lost_INR":  132743,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "E-commerce"
    },
    {
        "Year":  2023,
        "Day":  12,
        "Amount_Lost_INR":  263307,
        "Incident_Type":  "Hacking",
        "City":  "Kolkata",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  24,
        "Amount_Lost_INR":  304568,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  28,
        "Amount_Lost_INR":  447960,
        "Incident_Type":  "Hacking",
        "City":  "Lucknow",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  21,
        "Amount_Lost_INR":  464547,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Mumbai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  15,
        "Amount_Lost_INR":  404850,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  16,
        "Amount_Lost_INR":  136870,
        "Incident_Type":  "Phishing",
        "City":  "Pune",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  5,
        "Amount_Lost_INR":  285564,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2023,
        "Day":  27,
        "Amount_Lost_INR":  121575,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  20,
        "Amount_Lost_INR":  259230,
        "Incident_Type":  "Ransomware",
        "City":  "Jaipur",
        "Category":  "Health"
    },
    {
        "Year":  2022,
        "Day":  6,
        "Amount_Lost_INR":  292444,
        "Incident_Type":  "Identity Theft",
        "City":  "Chennai",
        "Category":  "Personal"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  353025,
        "Incident_Type":  "Hacking",
        "City":  "Bangalore",
        "Category":  "E-commerce"
    },
    {
        "Year":  2020,
        "Day":  25,
        "Amount_Lost_INR":  11749,
        "Incident_Type":  "Data Breach",
        "City":  "Lucknow",
        "Category":  "E-commerce"
    },
    {
        "Year":  2019,
        "Day":  5,
        "Amount_Lost_INR":  105131,
        "Incident_Type":  "Identity Theft",
        "City":  "Hyderabad",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  3,
        "Amount_Lost_INR":  157193,
        "Incident_Type":  "Malware",
        "City":  "Jaipur",
        "Category":  "Government"
    },
    {
        "Year":  2021,
        "Day":  27,
        "Amount_Lost_INR":  391707,
        "Incident_Type":  "Hacking",
        "City":  "Mumbai",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  300631,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  26,
        "Amount_Lost_INR":  226019,
        "Incident_Type":  "Phishing",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  28,
        "Amount_Lost_INR":  427577,
        "Incident_Type":  "Identity Theft",
        "City":  "Delhi",
        "Category":  "Educational"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  284367,
        "Incident_Type":  "Malware",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2022,
        "Day":  15,
        "Amount_Lost_INR":  73930,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  146128,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Jaipur",
        "Category":  "Personal"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  291524,
        "Incident_Type":  "Cyber Bullying",
        "City":  "Delhi",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  17,
        "Amount_Lost_INR":  289179,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Social Media"
    },
    {
        "Year":  2021,
        "Day":  25,
        "Amount_Lost_INR":  293764,
        "Incident_Type":  "Ransomware",
        "City":  "Kolkata",
        "Category":  "Health"
    },
    {
        "Year":  2023,
        "Day":  24,
        "Amount_Lost_INR":  414093,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  12,
        "Amount_Lost_INR":  257553,
        "Incident_Type":  "Hacking",
        "City":  "Pune",
        "Category":  "Corporate"
    },
    {
        "Year":  2023,
        "Day":  18,
        "Amount_Lost_INR":  449532,
        "Incident_Type":  "Ransomware",
        "City":  "Pune",
        "Category":  "Government"
    },
    {
        "Year":  2019,
        "Day":  15,
        "Amount_Lost_INR":  196113,
        "Incident_Type":  "Identity Theft",
        "City":  "Lucknow",
        "Category":  "Social Media"
    },
    {
        "Year":  2019,
        "Day":  12,
        "Amount_Lost_INR":  380504,
        "Incident_Type":  "Malware",
        "City":  "Ahmedabad",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  16,
        "Amount_Lost_INR":  54352,
        "Incident_Type":  "Hacking",
        "City":  "Ahmedabad",
        "Category":  "Health"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  64440,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  9,
        "Amount_Lost_INR":  288239,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  275987,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  17,
        "Amount_Lost_INR":  271723,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  16,
        "Amount_Lost_INR":  27990,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  21,
        "Amount_Lost_INR":  105931,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  17,
        "Amount_Lost_INR":  48172,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  6,
        "Amount_Lost_INR":  287053,
        "Incident_Type":  "Others",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  39326,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  22,
        "Amount_Lost_INR":  116765,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  27,
        "Amount_Lost_INR":  59487,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  18,
        "Amount_Lost_INR":  233189,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  24,
        "Amount_Lost_INR":  85611,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  15,
        "Amount_Lost_INR":  178914,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  43403,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  6,
        "Amount_Lost_INR":  137072,
        "Incident_Type":  "Others",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  124351,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  14,
        "Amount_Lost_INR":  208440,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  21,
        "Amount_Lost_INR":  217047,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  11,
        "Amount_Lost_INR":  13855,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  22,
        "Amount_Lost_INR":  67026,
        "Incident_Type":  "Others",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  1,
        "Amount_Lost_INR":  38154,
        "Incident_Type":  "Others",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  2,
        "Amount_Lost_INR":  43057,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  17,
        "Amount_Lost_INR":  60645,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  162994,
        "Incident_Type":  "Others",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  3,
        "Amount_Lost_INR":  152596,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  13,
        "Amount_Lost_INR":  212153,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  16,
        "Amount_Lost_INR":  86958,
        "Incident_Type":  "Others",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  8,
        "Amount_Lost_INR":  76503,
        "Incident_Type":  "Ransomware",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  26,
        "Amount_Lost_INR":  291116,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  21,
        "Amount_Lost_INR":  80537,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  22,
        "Amount_Lost_INR":  200627,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  18,
        "Amount_Lost_INR":  296016,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  4,
        "Amount_Lost_INR":  26901,
        "Incident_Type":  "Phishing",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  19,
        "Amount_Lost_INR":  211612,
        "Incident_Type":  "Others",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  18,
        "Amount_Lost_INR":  49630,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  7,
        "Amount_Lost_INR":  185277,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  14,
        "Amount_Lost_INR":  273725,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  6,
        "Amount_Lost_INR":  101465,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2020,
        "Day":  20,
        "Amount_Lost_INR":  137509,
        "Incident_Type":  "Online Fraud",
        "City":  "Mumbai",
        "Category":  "Financial"
    },
    {
        "Year":  2021,
        "Day":  4,
        "Amount_Lost_INR":  100083,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  28,
        "Amount_Lost_INR":  33515,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  293182,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  10,
        "Amount_Lost_INR":  40317,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  4,
        "Amount_Lost_INR":  108503,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  16,
        "Amount_Lost_INR":  178461,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  127962,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  10,
        "Amount_Lost_INR":  41599,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  11,
        "Amount_Lost_INR":  259731,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  11,
        "Amount_Lost_INR":  165261,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  196099,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  14,
        "Amount_Lost_INR":  93415,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  11,
        "Amount_Lost_INR":  134066,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  23,
        "Amount_Lost_INR":  233654,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  27,
        "Amount_Lost_INR":  193474,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  22,
        "Amount_Lost_INR":  178834,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  238495,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  25,
        "Amount_Lost_INR":  165155,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  18,
        "Amount_Lost_INR":  62059,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  21,
        "Amount_Lost_INR":  47977,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  28,
        "Amount_Lost_INR":  78401,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  7,
        "Amount_Lost_INR":  143010,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  24,
        "Amount_Lost_INR":  44531,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  28,
        "Amount_Lost_INR":  270907,
        "Incident_Type":  "Phishing",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  27,
        "Amount_Lost_INR":  217407,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  7,
        "Amount_Lost_INR":  24218,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  9,
        "Amount_Lost_INR":  289934,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  16,
        "Amount_Lost_INR":  82926,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  13,
        "Amount_Lost_INR":  122076,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  24,
        "Amount_Lost_INR":  157567,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  15,
        "Amount_Lost_INR":  267732,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  3,
        "Amount_Lost_INR":  213029,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  17,
        "Amount_Lost_INR":  10553,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  28,
        "Amount_Lost_INR":  91949,
        "Incident_Type":  "Others",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  5,
        "Amount_Lost_INR":  238948,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  6,
        "Amount_Lost_INR":  81650,
        "Incident_Type":  "Ransomware",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  12,
        "Amount_Lost_INR":  26191,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  25,
        "Amount_Lost_INR":  260664,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  3,
        "Amount_Lost_INR":  143599,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2021,
        "Day":  8,
        "Amount_Lost_INR":  27443,
        "Incident_Type":  "Online Fraud",
        "City":  "Bangalore",
        "Category":  "Corporate"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  194399,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  16,
        "Amount_Lost_INR":  243364,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  2,
        "Amount_Lost_INR":  174906,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  23,
        "Amount_Lost_INR":  278349,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  143053,
        "Incident_Type":  "Others",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  18,
        "Amount_Lost_INR":  96147,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  21,
        "Amount_Lost_INR":  203452,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  19,
        "Amount_Lost_INR":  45809,
        "Incident_Type":  "Others",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  9,
        "Amount_Lost_INR":  202304,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  217778,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  185896,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  26,
        "Amount_Lost_INR":  257764,
        "Incident_Type":  "Others",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  1,
        "Amount_Lost_INR":  268107,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  15,
        "Amount_Lost_INR":  91825,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  3,
        "Amount_Lost_INR":  274767,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  7,
        "Amount_Lost_INR":  83769,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  6,
        "Amount_Lost_INR":  194909,
        "Incident_Type":  "Others",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  23,
        "Amount_Lost_INR":  67039,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  14,
        "Amount_Lost_INR":  178132,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  16,
        "Amount_Lost_INR":  256036,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  7,
        "Amount_Lost_INR":  89539,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  1,
        "Amount_Lost_INR":  132753,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  5,
        "Amount_Lost_INR":  89478,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  21,
        "Amount_Lost_INR":  273772,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  19,
        "Amount_Lost_INR":  81999,
        "Incident_Type":  "Phishing",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  6,
        "Amount_Lost_INR":  140402,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  217575,
        "Incident_Type":  "Others",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  19,
        "Amount_Lost_INR":  14762,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  3,
        "Amount_Lost_INR":  118557,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  20,
        "Amount_Lost_INR":  252156,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  6,
        "Amount_Lost_INR":  120009,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  20,
        "Amount_Lost_INR":  79822,
        "Incident_Type":  "Others",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  100359,
        "Incident_Type":  "Others",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  22,
        "Amount_Lost_INR":  272808,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  6,
        "Amount_Lost_INR":  184658,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  20,
        "Amount_Lost_INR":  41093,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  13,
        "Amount_Lost_INR":  207093,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  4,
        "Amount_Lost_INR":  13683,
        "Incident_Type":  "Online Fraud",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  17,
        "Amount_Lost_INR":  269429,
        "Incident_Type":  "Ransomware",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2022,
        "Day":  27,
        "Amount_Lost_INR":  83413,
        "Incident_Type":  "Others",
        "City":  "Delhi",
        "Category":  "Personal"
    },
    {
        "Year":  2023,
        "Day":  4,
        "Amount_Lost_INR":  98020,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  25466,
        "Incident_Type":  "Others",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  66612,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  16,
        "Amount_Lost_INR":  73329,
        "Incident_Type":  "Others",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  18,
        "Amount_Lost_INR":  5629,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  225559,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  28,
        "Amount_Lost_INR":  27774,
        "Incident_Type":  "Others",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  14,
        "Amount_Lost_INR":  125316,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  26,
        "Amount_Lost_INR":  204877,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  19,
        "Amount_Lost_INR":  56231,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  5,
        "Amount_Lost_INR":  138440,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  25,
        "Amount_Lost_INR":  126903,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  10,
        "Amount_Lost_INR":  290071,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  9,
        "Amount_Lost_INR":  104101,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  23,
        "Amount_Lost_INR":  8729,
        "Incident_Type":  "Others",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  17,
        "Amount_Lost_INR":  66776,
        "Incident_Type":  "Others",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  1,
        "Amount_Lost_INR":  201623,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  23,
        "Amount_Lost_INR":  170623,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  12,
        "Amount_Lost_INR":  60880,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  14,
        "Amount_Lost_INR":  137976,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  28,
        "Amount_Lost_INR":  286073,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  19,
        "Amount_Lost_INR":  196702,
        "Incident_Type":  "Others",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  9,
        "Amount_Lost_INR":  213380,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  14,
        "Amount_Lost_INR":  294461,
        "Incident_Type":  "Others",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  16,
        "Amount_Lost_INR":  98700,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  18,
        "Amount_Lost_INR":  295933,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  9,
        "Amount_Lost_INR":  165774,
        "Incident_Type":  "Others",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  12,
        "Amount_Lost_INR":  213734,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  28,
        "Amount_Lost_INR":  67435,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  15,
        "Amount_Lost_INR":  89827,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  7,
        "Amount_Lost_INR":  271518,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  26,
        "Amount_Lost_INR":  182438,
        "Incident_Type":  "Others",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  32290,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  13,
        "Amount_Lost_INR":  7773,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  27,
        "Amount_Lost_INR":  81193,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  233263,
        "Incident_Type":  "Phishing",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  3,
        "Amount_Lost_INR":  142935,
        "Incident_Type":  "Online Fraud",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  12,
        "Amount_Lost_INR":  46963,
        "Incident_Type":  "Others",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  2,
        "Amount_Lost_INR":  206497,
        "Incident_Type":  "Ransomware",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2023,
        "Day":  20,
        "Amount_Lost_INR":  278156,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Lucknow",
        "Category":  "Government"
    },
    {
        "Year":  2024,
        "Day":  23,
        "Amount_Lost_INR":  35127,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  21,
        "Amount_Lost_INR":  264191,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  1,
        "Amount_Lost_INR":  110752,
        "Incident_Type":  "Others",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  10,
        "Amount_Lost_INR":  107103,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  26,
        "Amount_Lost_INR":  272674,
        "Incident_Type":  "Others",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  23,
        "Amount_Lost_INR":  126462,
        "Incident_Type":  "Others",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  23906,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  8,
        "Amount_Lost_INR":  5150,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  3,
        "Amount_Lost_INR":  149670,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  12,
        "Amount_Lost_INR":  212168,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  110020,
        "Incident_Type":  "Others",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  1,
        "Amount_Lost_INR":  40975,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  18,
        "Amount_Lost_INR":  154156,
        "Incident_Type":  "Others",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  187502,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  27,
        "Amount_Lost_INR":  149969,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  20,
        "Amount_Lost_INR":  106987,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  13,
        "Amount_Lost_INR":  7438,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  6,
        "Amount_Lost_INR":  218455,
        "Incident_Type":  "Others",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  297883,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  17,
        "Amount_Lost_INR":  159272,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  274110,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  18,
        "Amount_Lost_INR":  136146,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  13,
        "Amount_Lost_INR":  258561,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  25,
        "Amount_Lost_INR":  183080,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  22,
        "Amount_Lost_INR":  246550,
        "Incident_Type":  "Others",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  28,
        "Amount_Lost_INR":  19339,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  4,
        "Amount_Lost_INR":  140171,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  13,
        "Amount_Lost_INR":  120543,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  26,
        "Amount_Lost_INR":  170533,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  12,
        "Amount_Lost_INR":  275796,
        "Incident_Type":  "Others",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  1,
        "Amount_Lost_INR":  143071,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  10,
        "Amount_Lost_INR":  53763,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  22,
        "Amount_Lost_INR":  184302,
        "Incident_Type":  "Phishing",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  18,
        "Amount_Lost_INR":  98577,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  11,
        "Amount_Lost_INR":  190355,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  19,
        "Amount_Lost_INR":  146073,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  104702,
        "Incident_Type":  "Ransomware",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  109682,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  24,
        "Amount_Lost_INR":  131907,
        "Incident_Type":  "Malware_Attacks",
        "City":  "Chennai",
        "Category":  "Social Media"
    },
    {
        "Year":  2024,
        "Day":  7,
        "Amount_Lost_INR":  125170,
        "Incident_Type":  "Online Fraud",
        "City":  "Chennai",
        "Category":  "Social Media"
    }
];

    globalScope.CYBER_DATA = cyberCrimeCases;
})(window);
