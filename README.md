<div align="center">

![Cyber Crime Data Analysis](https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,50:10b981,100:14b8a6&height=220&section=header&text=Cyber%20Crime%20Data%20Analysis&fontSize=38&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=SQL%20Analytics%20Portfolio%20Project&descAlignY=58&descSize=18)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=22&duration=2500&pause=700&color=10B981&center=true&vCenter=true&width=800&lines=1200%2B+Cybersecurity+Cases+Analyzed;SQL+Queries+%2B+Interactive+Web+Dashboard;Financial+Loss+%7C+City+Trends+%7C+Attack+Patterns;Built+by+Ambrish+Mishra)](https://git.io/typing-svg)

![SQL](https://img.shields.io/badge/SQL-MySQL-0f766e?style=for-the-badge&logo=mysql&logoColor=white)
![Data Analytics](https://img.shields.io/badge/Data-Analytics-10b981?style=for-the-badge&logo=databricks&logoColor=white)
![Dashboard](https://img.shields.io/badge/Web-Dashboard-14b8a6?style=for-the-badge&logo=react&logoColor=white)
![Status](https://img.shields.io/badge/Project-Completed-22c55e?style=for-the-badge)

</div>

---

## Project Snapshot

This project analyzes cybersecurity cases in India using SQL and presents the insights through an interactive portfolio-style web dashboard. It focuses on financial losses, attack types, affected cities, targeted categories, and year-wise cybercrime patterns.

The project includes raw CSV data, SQL queries, and a browser-based dashboard where viewers can explore records, run queries, filter data, view charts, and export query results.

---

## Interactive Web Dashboard

The project also includes a polished front-end dashboard built from the SQL analysis.

### Dashboard Highlights

- Landing page with project intro and animated transition
- Full CSV integration with **1,200 records**
- Summary cards for total incidents, financial loss, top city, and costliest attack type
- Filters for city, year, category, and incident type
- Charts for incident trends and financial impact
- SQL query runner with highlighted SQL preview
- Export query results as CSV
- Mobile-friendly layout with scroll support

> Open `index.html` in the project folder or run a local server to view the dashboard.

---

## Dataset Overview

| Column | Description |
|---|---|
| `Year` | Year of the cybersecurity incident |
| `Day` | Day of occurrence |
| `Amount_Lost_INR` | Financial loss caused by the incident |
| `Incident_Type` | Type of cyber attack |
| `City` | Indian city where the incident was recorded |
| `Category` | Targeted sector or victim category |

---

## Key Metrics

| Metric | Value |
|---|---:|
| Total Records | **1,200** |
| Total Financial Loss | **₹277,846,383** |
| Average Loss Per Incident | **₹231,539** |
| Highest Loss Incident Type | **Ransomware** |
| City With Most Incidents | **Mumbai** |

---

## Insights at a Glance

<details open>
<summary><b>Financial Impact</b></summary>

- Total financial loss is more than **₹277 million**.
- Average loss per case is around **₹231K**.
- Ransomware caused the highest total financial damage.

</details>

<details>
<summary><b>Top Cyber Threats by Financial Loss</b></summary>

| Rank | Incident Type | Total Loss |
|---:|---|---:|
| 1 | Ransomware | ₹41,098,786 |
| 2 | Phishing | ₹34,713,968 |
| 3 | Data Breach | ₹34,102,131 |
| 4 | Online Fraud | ₹33,822,815 |
| 5 | Hacking | ₹32,620,076 |

</details>

<details>
<summary><b>Cities With Highest Incident Counts</b></summary>

| Rank | City | Incidents |
|---:|---|---:|
| 1 | Mumbai | 155 |
| 2 | Delhi | 143 |
| 3 | Chennai | 142 |
| 4 | Bangalore | 135 |
| 5 | Lucknow | 128 |

</details>

<details>
<summary><b>Most Targeted Categories</b></summary>

| Rank | Category | Incidents |
|---:|---|---:|
| 1 | Social Media | 177 |
| 2 | Corporate | 176 |
| 3 | Personal | 159 |
| 4 | Government | 154 |
| 5 | Financial | 152 |

</details>

---

## SQL Analysis Covered

### Basic SQL

- Retrieve all records
- Filter incidents by city
- Find unique incident types
- Sort incidents by financial loss

### Intermediate SQL

- Total loss by incident type
- Incident count by city
- Average loss by category
- City and year-based grouping

### Advanced SQL

- `CASE` statements for loss categorization
- CTE-based filtering
- Subqueries and correlated subqueries
- Self joins
- Window functions such as `RANK`, `DENSE_RANK`, `LAG`, and cumulative totals

---

## Sample SQL Query

```sql
SELECT Incident_Type,
       SUM(Amount_Lost_INR) AS total_financial_loss
FROM cybersecurity_cases_india_combined
GROUP BY Incident_Type
ORDER BY total_financial_loss DESC
LIMIT 5;
```

---

## Project Files

| File | Purpose |
|---|---|
| `Cyber_crime_data_analysis.sql` | Complete SQL analysis queries |
| `cybersecurity_cases_india_combined.csv` | Main cybersecurity dataset |
| `cyber_data.js` | Browser-ready dataset generated from the CSV |
| `index.html` | Interactive SQL portfolio website |
| `README.md` | Project documentation |

---

## Required File Structure

Keep these files together in the same project folder so the dashboard and SQL project work correctly.

```text
Cyber_crime_data_analysis-SQL-main/
|
|-- README.md
|-- index.html
|-- cyber_data.js
|-- cybersecurity_cases_india_combined.csv
|-- Cyber_crime_data_analysis.sql
```

### Why Each File Is Needed

| Required File | Needed For |
|---|---|
| `index.html` | Main interactive website and SQL dashboard |
| `cyber_data.js` | Loads the full CSV dataset into the browser dashboard |
| `cybersecurity_cases_india_combined.csv` | Original source dataset |
| `Cyber_crime_data_analysis.sql` | SQL queries used for the analysis |
| `README.md` | Project explanation, documentation, and GitHub presentation |

> Important: `index.html` depends on `cyber_data.js`, so both files must stay in the same folder.

---

## Tools and Technologies

<div align="center">

| Tool | Use |
|---|---|
| MySQL | SQL analysis and query writing |
| CSV | Raw dataset storage |
| HTML, CSS, JavaScript | Dashboard structure and interactivity |
| React CDN | Browser-based UI rendering |
| AlaSQL | In-browser SQL execution |
| Tailwind CSS | Responsive dashboard styling |

</div>

---

## Business Value

This project helps viewers understand how SQL can support cybersecurity decision-making by:

- Identifying high-risk attack types
- Measuring financial impact by incident category
- Comparing city-wise cybercrime exposure
- Detecting vulnerable sectors
- Supporting data-driven cyber risk planning

---

## How to Run

### Option 1: Open Directly

Open `index.html` in your browser.

### Option 2: Run With Local Server

```bash
python -m http.server 8765
```

Then open:

```text
http://127.0.0.1:8765/index.html
```

---

## Make It Live With GitHub Pages

After uploading this project to GitHub:

1. Open your repository on GitHub.
2. Go to `Settings`.
3. Open `Pages` from the left sidebar.
4. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Click `Save`.

Your live project link will look like this:

```text
https://your-github-username.github.io/your-repository-name/
```

For example:

```text
https://ambrish8178.github.io/Cyber_crime_data_analysis-SQL-main/
```

---

## Author

<div align="center">

### Ambrish Mishra

Bachelor of Technology in Computer Science and Engineering  
Greater Noida Institute of Technology, 2022-2026

[![LinkedIn](https://img.shields.io/badge/LinkedIn-ambrish8178-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ambrish8178)
[![GitHub](https://img.shields.io/badge/GitHub-ambrishmishra847-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ambrishmishra847)
[![Email](https://img.shields.io/badge/Email-ambrishmishra847%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ambrishmishra847@gmail.com)

</div>

---

<div align="center">

### If you like this project, consider giving it a star.

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:14b8a6,50:10b981,100:0f766e&height=120&section=footer)

</div>
