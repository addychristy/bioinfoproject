var data = [
    {
        question: "Which of the following is wrong about National Biomedical Research Foundation/Protein Information Resource Sequence Format?",
        options: ["This is different than PIR format","The first line includes an initial “>” character followed by a two-letter code such as P for complete sequence or F for the fragment, followed by a 1 or 2 to indicate type of sequence, then a semicolon, then a four- to six-character unique name for the entry","The NBRF format is similar to the FASTA sequence format but with significant differences","Sequences retrieved from the PIR database are not in this compact format, but in an expanded format with much more information about the sequence"],
        correct_option: "This is different than PIR format"
    },
    {
        question: "Which of the following is untrue about SCOP?",
        options: ["It is constructed almost entirely based on manual examination of protein structures","The SCOP families consist of proteins having low sequence identity (>30%)","It is a database for comparing and classifying protein structures","The proteins are grouped into hierarchies of classes, folds, superfamilies, and families"],
        correct_option: "The SCOP families consist of proteins having low sequence identity (>30%)"
    },
    {
        question: "Which of the following statements about SCOP is incorrect regarding its features?",
        options: ["Proteins with the same shapes but having little sequence or functional similarity are placed in different super families, and are assumed to have only a very distant common ancestor","Proteins having the same shape and some similarity of sequence and/or function are placed in ‘families’, and are assumed to have a closer common ancestor","SCOP was created in 1994 in the Centre of Protein Engineering and the University College London","It aims to determine the evolutionary relationship between proteins"],
        correct_option: "SCOP was created in 1994 in the Centre of Protein Engineering and the University College London"
    },
    {
        question: "What is the source of protein structures in SCOP and CATH?",
        options: ["Uniprot","Protein Data Bank","Ensemble","InterPro"],
        correct_option: "Protein Data Bank"
    },
    {
        question: "What is the full form of DBMS?",
        options: ["Data of Binary Management System","Database Management System","Database Management Service","Data Backup Management System"],
        correct_option: "Database Management System"
    },
    {
        question: "Who created the first DBMS?",
        options: ["Edgar Frank Codd","Charles Bachman","Charles Babbage","Sharon B. Codd"],
        correct_option: "Charles Bachman"
    },
    {
        question: "Which of the following is not an example of DBMS?",
        options: ["MySQL","Microsoft Access","IBM DB2","Google"],
        correct_option: "Google"
    },
    {
        question: "What is information about data called?",
        options: ["Hyper data","Tera data","Meta data","Relations"],
        correct_option: "Meta data"
    },
    {
        question: "The ability to query data, as well as insert, delete, and alter tuples, is offered by __________",
        options: ["TCL (Transaction Control Language)","DCL (Data Control Language)","DDL (Data Definition Langauge)","DML (Data Manipulation Langauge)"],
        correct_option: "DML (Data Manipulation Langauge)"
    },
    {
        question: "______________ is a set of one or more attributes taken collectively to uniquely identify a record",
        options: ["Primary Key","Foreign key","Super key","Candidate key"],
        correct_option: "Super key"
    },
    {
        question: "Which command is used to remove a relation from an SQL?",
        options: ["Drop table","Delete","Purge","Remove"],
        correct_option: "Drop table"
    },
    {
        question: "________________ operations do not preserve non-matched tuples",
        options: ["Left outer join","Inner join","Natural join","Right outer join"],
        correct_option: "Inner join"
    },
    {
        question: "After groups have been established, SQL applies predicates in the ___________ clause, allowing \n aggregate functions to be used.",
        options: ["Where","Having","Group by","With"],
        correct_option: "With"
    },
    {
        question: "Which of the following is the best way to represent the attributes in a large db?",
        options: ["Dot representation","Concatenation","Relational-and","All of the mentioned"],
        correct_option: "Concatenation"
    },
    {
        question: "Which of the following key is required in to handle the data when the encryption is applied to the \n data so that the unauthorised user cannot access the data?",
        options: ["Primary key","Authorised key","Encryption key","Decryption key"],
        correct_option: "Decryption key"
    },
    {
        question: "The oldest DB model is ____________",
        options: ["Network","Physical","Hierarchical","Relational"],
        correct_option: "Network"
    },
    {
        question: "Which of the following establishes a top-to-bottom relationship among the items?",
        options: ["Relational schema","Network schema","Hierarchical schema","All of the mentioned"],
        correct_option: "Hierarchical schema"
    },
    {
        question: "A major goal of the db system is to minimize the number of block transfers between the disk and \n memory. Which of the following helps in achieving this goal?",
        options: ["Secondary storage","Storage","Catalog","Buffer"],
        correct_option: "Buffer"
    },
    {
        question: "The logical design, and the snapshot of the data at a given instant in time is known as?",
        options: ["Instance & Relation","Relation & Schema","Domain & Schema","Schema & Instance"],
        correct_option: "Schema & Instance"
    },
    {
        question: "Which of the following isn’t a level of abstraction?",
        options: ["physical","logical","user","view"],
        correct_option: "user"
    },
    {
        question: "A logical structure of the database.",
        options: ["Schema","Attribute","Parameter","Instance"],
        correct_option: "Schema"
    },
    {
        question: "SQL is ______",
        options: ["Relational","Network","IMS","Hierarchical"],
        correct_option: "Relational"
    },
    {
        question: "A level that describes data stored in a database and the relationships among the data.",
        options: ["physical","logical","user","view"],
        correct_option: "logical"
    },
    {
        question: "Choose the correct statement regarding superkeys",
        options: ["A superkey is an attribute or a group of multiple attributes that can uniquely identify a tuple","A superkey is a tuple or a set of multiple tuples that can uniquely identify an attribute","Every superkey is a candidate key","A superkey is an attribute or a set of attributes that distinguish the relation from other relations"],
        correct_option: "A superkey is an attribute or a group of multiple attributes that can uniquely identify a tuple"
    },
    {
        question: "What is a foreign key?",
        options: ["A foreign key is a primary key of a relation which is an attribute in another relation","A foreign key is a superkey of a relation which is an attribute in more than one other relations","A foreign key is an attribute of a relation that is a primary key of another relation","A foreign key is the primary key of a relation that does not occur anywhere else in the schema"],
        correct_option: "A foreign key is an attribute of a relation that is a primary key of another relation"
    },
    {
        question: "Statement 1: A tuple is a row in a relation \n Statement 2: Existence of multiple foreign keys in a same relation is possible",
        options: ["Both the statements are true","Statement 1 is correct but Statement 2 is false","Statement 1 is false but Statement 2 is correct","Both the statements are false"],
        correct_option: "Both the statements are true"
    },
    {
        question: "The view of total database content is",
        options: ["Conceptual view","Internal view","External view","Physical view"],
        correct_option: "Conceptual view"
    },
    {
        question: "Architecture of the database can be viewed as",
        options: ["two levels","three levels","four levels","one level"],
        correct_option: "three levels"
    },
    {
        question: "In a Hierarchical model records are organized as",
        options: ["Graph","List","Links","Tree"],
        correct_option: "Tree"
    },
    {
        question: "Which of the following is record based logical model?",
        options: ["Network Model","Object oriented model","E-R Model","None of these"],
        correct_option: "Network Model"
    },
    {
        question: "'What data is stored ?' is described by __________ level of abstraction in DBMS.",
        options: ["Physical","View","Conceptual","None of the above"],
        correct_option: "Conceptual"
    },
    {
        question: "If user doesn't know anything about the complexity of database application then that user is \n called as ___________",
        options: ["Naive User","Database Manager","Database Operator","Database Administrator"],
        correct_option: "Naive User"
    },
    {
        question: "Data Model is collection of conceptual tools for describing",
        options: ["Data","Data Schema","Consistency Constaints","All of these"],
        correct_option: "All of these"
    },
    {
        question: "What is the full form of SQL?",
        options: ["Structured Query Language","Structured Query List","Simple Query Language","None of the mentioned"],
        correct_option: "Structured Query Language"
    },
    {
        question: "In SQL, which command is used to SELECT only one copy of each set of duplicable rows",
        options: ["SELECT DISTINCT","UNIQUE","SELECT DIFFERENT","All of the mentioned"],
        correct_option: "SELECT DISTINCT"
    },
    {
        question: "A command that lets you change one or more fields in a record is",
        options: ["Insert","Modify","Look-up","All of the mentioned"],
        correct_option: "Modify"
    },
    {
        question: " Which of the following is incorrect about ENTREZ?",
        options: ["It provides a series of forms that can be filled out to retrieve a Medline reference related to the \n molecular biology sequence databases","It provides a series of forms that can be filled out to retrieve a DNA or protein sequence","It is a resource prepared only by the staff of the National Center for Biotechnology Information","One straightforward way to access the sequence databases is through ENTREZ"],
        correct_option: "It is a resource prepared only by the staff of the National Center for Biotechnology Information"
    },
    {
        question: "Which of the following is the protein structure databases",
        options: ["SWISS-PROT","GenBank","PDB","DDBJ"],
        correct_option: "PDB"
    },
    {
        question: "The information retrieval system at NCBI is",
        options: ["Entrez","Prosite","SRS","STAG"],
        correct_option: "Entrez"
    },
    {
        question: "Which of the following is wrong about GenBank DNA Sequence Entry?",
        options: ["The information is organized into fields, each with an identifier, shown as the first text on each line","In some entries, these identifiers may be abbreviated to two letters, e.g., RF for reference","Some identifiers may have additional subfields","The CDS subfield in the field FEATURES does not offer the amino acid sequence"],
        correct_option: "The CDS subfield in the field FEATURES does not offer the amino acid sequence"
    },
    {
        question: "Which of the following is wrong about European Molecular Biology Laboratory Data Library Format?",
        options: ["EMBL maintains DNA and protein sequence databases","As with GenBank entries, a large amount of information describing each sequence entry is given","Sequence entry includes literature references and information about the function of the sequence, but \n not locations of mRNAs and coding regions","Information is organized into fields, each with an identifier, shown as the first text on each line"],
        correct_option: "Sequence entry includes literature references and information about the function of the sequence, but \n not locations of mRNAs and coding regions"
    },
    {
        question: "Which of the following is an example of Homology and similarity tool?",
        options: ["BLAST","RasMol","EMBOSS","PROSPECT"],
        correct_option: "BLAST"
    },
    {
        question: "In which year did the SWISSPROT protein sequence database begin?",
        options: ["1988","1985","1986","1987"],
        correct_option: "1987"
    },
    {
        question: "Which of the following scientists created the first Bioinformatics database?",
        options: ["Dayhoff","Pearson","Richard Durbin","Michael J. Dunn"],
        correct_option: "Dayhoff"
    },
    {
        question: "What are the issues on which biological networks proves to be superior than AI networks?",
        options: ["robustness & fault tolerance","flexibility","collective computation","all of the mentioned"],
        correct_option: "all of the mentioned"
    },
    {
        question: "Which is the most direct application of neural networks?",
        options: ["vector quantization","pattern mapping","pattern classification","control applications"],
        correct_option: "pattern classification"
    },
    {
        question: "What are pros of neural networks over computers?",
        options: ["they have ability to learn from examples","they have real time high computational rates","they have more tolerance","all of the mentioned"],
        correct_option: "all of the mentioned"
    },
    {
        question: "What is true about single layer associative neural networks?",
        options: ["performs pattern recognition","can find the parity of a picture","can determine whether two or more shapes in a picture are connected or not","none of the mentioned"],
        correct_option: "performs pattern recognition"
    },
    {
        question: "What does the matching score at first layer in recognition hamming network is indicative of?",
        options: ["dissimilarity of input pattern with patterns stored","noise immunity","similarity of input pattern with patterns stored","none of the mentioned"],
        correct_option: "similarity of input pattern with patterns stored"
    },
    {
        question: "support vector machines is _____",
        options: ["classification learning","Unsupervised Machine Learning","Supervised Machine Learning","reinforcement learning"],
        correct_option: "Supervised Machine Learning"
    },
    {
        question: "_____ cannot learn directly learned.",
        options: ["system vector networks","support vector networks","Hyperparameters","system vector navigation"],
        correct_option: "Hyperparameters"
    },
    {
        question: "Naive Bayes classifiers are a collection of classification algorithms based \n on ______",
        options: ["Naive theorem","Bayes theorem","Both A and B","none of these"],
        correct_option: "Bayes theorem"
    },
    {
        question: "Which of the following is used to store movie and image files?",
        options: ["Clob","Blob","Binary","Image"],
        correct_option: "Blob"
    },
    {
        question: "The user defined data type can be created using",
        options: ["Create datatype","Create data","Create definetype","Create type"],
        correct_option: "Create type"
    },
    {
        question: "Which of the following is not a valid Date and Time data type?",
        options: ["date","time","datestamp","timestamp"],
        correct_option: "datestamp"
    },
    {
        question: "What is a timestamp?",
        options: ["A combination of date and time with date first","A combination of date and time with time first","A combination of time and place with time first","A combination of time and place with place first"],
        correct_option: "A combination of date and time with date first"
    },
    {
        question: "Which of the following is an illegal data type in SQL",
        options: ["number","clob","blob","lint"],
        correct_option: "lint"
    },    
]

export default data;