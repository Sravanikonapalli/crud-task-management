CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,    
    due_date TEXT, 
    status TEXT DEFAULT 'Pending',
    remarks TEXT,
    created_on TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_on TEXT DEFAULT CURRENT_TIMESTAMP, 
    created_by_name TEXT,
    created_by_id INTEGER,
    updated_by_name TEXT, 
    updated_by_id INTEGER  
    );

    CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,    
    due_date TEXT, 
    status TEXT DEFAULT 'Pending',
    remarks TEXT,
    created_on TEXT DEFAULT (datetime('now', 'localtime')),
    updated_on TEXT DEFAULT (datetime('now', 'localtime')), 
    created_by_name TEXT,
    created_by_id INTEGER,
    updated_by_name TEXT, 
    updated_by_id INTEGER  
);
