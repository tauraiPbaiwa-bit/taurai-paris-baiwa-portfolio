export interface Project {
  id: string
  slug: string
  title: string
  description: string
  tech: string[]
  github: string
  outcome: string
  featured: boolean
  problem: string
  constraints: string
  architecture: string
  highlights: string[]
  results: string[]
}

export const projects: Project[] = [
  {
    id: '1', slug: 'customer-churn-prediction-system', title: 'Customer Churn Prediction System',
    description: 'A full-stack system that cleans customer data, performs OLAP analysis, trains churn models, and serves predictions through a React dashboard.',
    tech: ['Python', 'FastAPI', 'React', 'MongoDB', 'XGBoost'], github: 'https://github.com/tauraiPbaiwa-bit/churn-prediction-system',
    outcome: 'Provides explainable individual and batch churn predictions after comparing multiple machine-learning models.', featured: true,
    problem: 'Teams need a practical way to turn customer datasets into understandable churn insights and actionable predictions without separating analysis from the decision-making workflow.',
    constraints: 'The project supports CSV and Excel uploads, uses a reproducible preprocessing path for training and prediction, and is straightforward to run locally.',
    architecture: 'A FastAPI backend validates and stores datasets in MongoDB, runs cleaning, feature engineering, OLAP aggregation, model training, SHAP explanation, and prediction workflows. A React and Vite dashboard presents dataset management, analytics, model comparisons, and prediction history.',
    highlights: ['Compares XGBoost, Logistic Regression, and Random Forest models using ROC-AUC and other classification metrics', 'Adds SHAP-based explanation and feature-importance views to make model outputs interpretable', 'Supports individual and batch predictions with persisted model bundles and consistent preprocessing', 'Includes OLAP-style summaries and custom multidimensional customer-segmentation queries'],
    results: ['Connects data preparation, analytics, model evaluation, and prediction in one workflow', 'Makes model selection transparent through comparison metrics and explainability outputs', 'Provides a reusable dashboard for working with new customer datasets'],
  },
  {
    id: '2', slug: 'banks-etl-pipeline', title: 'Banks ETL Pipeline',
    description: 'A Python ETL pipeline that extracts global bank market-cap data, converts it into multiple currencies, and loads it to CSV and SQLite.',
    tech: ['Python', 'Pandas', 'Beautiful Soup', 'SQLite', 'ETL'], github: 'https://github.com/tauraiPbaiwa-bit/Bank-ETL',
    outcome: 'Produces queryable bank-market-capitalization data in USD, GBP, EUR, and INR with a timestamped execution log.', featured: true,
    problem: 'A multinational team needs a repeatable process for converting a ranked list of global banks into locally useful market-capitalization data that each regional office can query.',
    constraints: 'The workflow uses an archived source table and supplied exchange-rate data, while delivering outputs in both a portable CSV and a lightweight relational database.',
    architecture: 'The Python pipeline extracts a market-capitalization table with requests and Beautiful Soup, transforms values with Pandas using exchange-rate data, writes a CSV, loads a SQLite table, runs office-specific queries, and records each stage in a log file.',
    highlights: ['Extracts the largest-bank table from an archived web source', 'Transforms USD values into GBP, EUR, and INR using supplied exchange rates', 'Loads the final dataset into both CSV and SQLite for different consumption needs', 'Runs targeted SQL queries for London, Berlin, and New Delhi and logs pipeline progress'],
    results: ['Delivers one repeatable pipeline from web extraction to queryable database output', 'Makes regional currency views available without duplicating data-preparation work', 'Creates an auditable execution trail through timestamped logging'],
  },
  {
    id: '3', slug: 'waste-management-data-warehouse', title: 'Waste Management Data Warehouse',
    description: 'A PostgreSQL data-warehouse design for analysing solid-waste collection across cities, time periods, truck types, and stations.',
    tech: ['PostgreSQL', 'SQL', 'Data Warehousing', 'CSV'], github: 'https://github.com/tauraiPbaiwa-bit/waste-management-schema',
    outcome: 'Enables multidimensional reporting on collection volumes by year, month, quarter, city, truck type, and station.', featured: true,
    problem: 'A waste-management company needs its trip data organized for reliable analytical reporting across locations, time periods, stations, and truck types.',
    constraints: 'The solution is designed specifically for PostgreSQL and uses supplied CSV datasets while keeping dimensions and measures clear for business reporting.',
    architecture: 'A dimensional warehouse joins FactTrips with DimDate, DimStation, and DimTruck datasets. PostgreSQL SQL scripts use aggregation to answer city, time, truck-type, and station reporting questions.',
    highlights: ['Models waste-collection activity with fact and dimension datasets', 'Uses PostgreSQL aggregation queries for year, month, and quarter analysis', 'Supports city, truck-type, and station-level reporting', 'Keeps source datasets and SQL task solutions organized for reproducible analysis'],
    results: ['Provides a structured foundation for operational reporting and analysis', 'Makes collection trends comparable across multiple business dimensions', 'Demonstrates practical dimensional modelling and PostgreSQL analytics'],
  },
]
