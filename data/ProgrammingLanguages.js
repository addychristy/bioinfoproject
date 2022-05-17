var data = [
    {
        question: "Consider the programme \n n=0 \nif n >2 \nFactorial ‘f’ \nelse \ni=f(n–1)+f(n–2) \nreturn \nif initial value n=5, then output of the program will be",
        options: ["0","4","5","No result will be produced"],
        correct_option: "No result will be produced"
    },
    {
        question: "Who is the father of C language?",
        options: ["Steve Jobs","James Gosling","Dennis Ritchie","Rasmus Lerdorf"],
        correct_option: "Dennis Ritchie"
    },
    {
        question: "All keywords in C are in _________",
        options: ["LowerCase letters","UpperCase letters","CamelCase letters","None of the mentioned"],
        correct_option: "LowerCase letters"
    },
    {
        question: "Which of the following is true for variable names in C?",
        options: ["They can contain alphanumeric characters as well as special characters"," It is not an error to declare a variable to be one of the keywords(like goto, static)","Variable names cannot start with a digit","Variable can be of any length"],
        correct_option: "Variable names cannot start with a digit"
    },
    {
        question: "Which keyword is used to prevent any changes in the variable within a C program?",
        options: ["immutable","mutable","const","volatile"],
        correct_option: "const"
    },
    {
        question: "What is an example of iteration in C?",
        options: ["for","while","do-while","all of the mentioned"],
        correct_option: "all of the mentioned"
    },
    {
        question: "The C-preprocessors are specified with _________ symbol.",
        options: ["#","$","''","&"],
        correct_option: "#"
    },
    {
        question: "What is an Array in C language?",
        options: ["A group of elements of same data type.","An array contains more than one element","Array elements are stored in memory in continuous or contiguous locations","All the above"],
        correct_option: "All the above"
    },
    {
        question: "An array Index starts with?",
        options: ["-1","0","1","2"],
        correct_option: "0"
    },
    {
        question: "What happens when you try to access an Array variable outside its size?",
        options: ["Compiler error is thrown","0 value will be returned","1 value will be returned","Some garbage value will be returned"],
        correct_option: "Some garbage value will be returned"
    },
    {
        question: "Can we change the starting index of an array from 0 to 1 in any way?",
        options: ["Yes. Through pointers","Yes. Through Call by Value","Yes. Through Call by Reference","None of the above"],
        correct_option: "None of the above"
    },
    {
        question: "What is a multidimensional array in C Language?",
        options: ["It is like a matrix or table with rows and columns","It is an array of arrays","To access 3rd tow 2nd element use ary[2][1] as the index starts from 0 row \n or column","All the above"],
        correct_option: "All the above"
    },
    {
        question: "If an integer array pointer is incremented, how many bytes \n will be skipped to reach next element location?",
        options: ["1","2","8","None of the above"],
        correct_option: "2"
    },
    {
        question: "What is the function used to allocate memory to an array at \n run time without initializing array elements?",
        options: ["calloc()","malloc()","palloc()","kalloc()"],
        correct_option: "malloc()"
    },
    {
        question: "Which of the following is used to input the entry and give the result in a variable in a procedure?",
        options: ["Put and get","Get and put","Out and In","In and out"],
        correct_option: "In and out"
    },
    {
        question: " A stored procedure in SQL is a________",
        options: ["Block of functions","Group of Transact-SQL statements compiled into a single execution plan","Group of distinct SQL statements","None of the mentioned"],
        correct_option: "Group of Transact-SQL statements compiled into a single execution plan"
    },
    {
        question: "Temporary stored procedures are stored in _________ database.",
        options: ["Master","Model","User specific","Tempdb"],
        correct_option: "Tempdb"
    },
    {
        question: "The keyword 'break' cannot be simply used within:",
        options: ["do-while","if-else","for","while"],
        correct_option: "if-else"
    },
    {
        question: "The following code 'for(;;)' represents an infinite loop. It can be terminated by.",
        options: ["break","exit(0)","abort()","All of the mentioned"],
        correct_option: "break"
    },
    {
        question: "Who invented OOP?",
        options: ["Andrea Ferro","Adele Goldberg","Alan Kay","Dennis Ritchie"],
        correct_option: "Alan Kay"
    },
    {
        question: "Which is not a feature of OOP in general definitions?",
        options: ["Efficient Code","Code reusability","Modularity","Duplicate/Redundant data"],
        correct_option: "Duplicate/Redundant data"
    },
    {
        question: "Which was the first purely object oriented programming language developed?",
        options: ["Kotlin","SmallTalk","Java","C++"],
        correct_option: "SmallTalk"
    },
    {
        question: "Which feature of OOP indicates code reusability?",
        options: ["Abstraction","Polymorphism","Encapsulation","Inheritance"],
        correct_option: "Inheritance"
    },
    {
        question: "Which feature of OOP is indicated by the following code? \n class student{  int marks;  }; \n  class topper:public student{  int age;  topper(int age){ this.age=age; } };",
        options: ["Encapsulation and Inheritance","Inheritance and polymorphism","Polymorphism","Inheritance"],
        correct_option: "Encapsulation and Inheritance"
    },
    {
        question: "Which of the following is not true about polymorphism?",
        options: ["Helps in redefining the same functionality","Increases overhead of function definition always","It is feature of OOP","Ease in readability of program"],
        correct_option: "Increases overhead of function definition always"
    },
    {
        question: "What is an abstraction in object-oriented programming?",
        options: ["Hiding the implementation and showing only the features","Hiding the important data","Hiding the implementation","Showing the important data"],
        correct_option: "Hiding the implementation and showing only the features"
    },
    {
        question: "In which access should a constructor be defined, so that object of the class can be created in any \n function?",
        options: ["Any access specifier will work","Private","Public","Protected"],
        correct_option: "Public"
    },
    {
        question: "Which access specifier is usually used for data members of a class?",
        options: ["Protected","Private","Public","Default"],
        correct_option: "Private"
    },
    {
        question: "What is the function of the mode ‘ w+’?",
        options: ["create text file for writing, discard previous contents if any","create text file for update, discard previous contents if any","create text file for writing, do not discard previous contents if any","create text file for update, do not discard previous contents if any"],
        correct_option: "create text file for update, discard previous contents if any"
    },
    {
        question: "fflush(NULL) flushes all _________",
        options: ["input streams","output streams","previous contents","appended text"],
        correct_option: "output streams"
    },
    {
        question: "fwrite() can be used only with files that are opened in binary mode.",
        options: ["true","false","all the above","none of the above"],
        correct_option: "true"
    },
    {
        question: "Which one of the following is the most powerful filter?",
        options: ["awk","grep","sed","perl"],
        correct_option: "perl"
    },
    {
        question: "To test whether perl is in your PATH, use ___",
        options: ["perl -e","perl -i","perl -el","perl -ed"],
        correct_option: "perl -e"
    },
    {
        question: " It is often more convenient to save perl program files with ____ extension",
        options: [".gp",".sh",".awk",".pl"],
        correct_option: ".pl"
    },
    {
        question: "If a variable is undefined, its value is __",
        options: ["0","1","NULL","garbage"],
        correct_option: "0"
    },
    {
        question: " Which of the following are concatenation operators?",
        options: ["/",".","_","//"],
        correct_option: "."
    },
    {
        question: "To repeat a string, perl uses ___ operator",
        options: ["/",".","x","//"],
        correct_option: "x"
    },
    {
        question: "Which function is used by perl for reversing a string?",
        options: ["rev","reverse","split","substr"],
        correct_option: "reverse"
    },
    {
        question: "Bioperl is an active ________ software project supported by the Open Bioinformatics Foundation",
        options: ["Free software","Linux","Open source","None of the above"],
        correct_option: "Open source"
    },
    {
        question: "Bioperl has played an integral role in the _______",
        options: ["Genetics","Chimpanzee genome project","Human Genome Project","DNA"],
        correct_option: "Human Genome Project"
    },
    {
        question: "BioPerl is a collection of ________ modules that facilitate the development of Perl scripts for \n bioinformatics applications.",
        options: ["PHP","Perl","Python","Lua"],
        correct_option: ""
    },
    {
        question: "Which of the following correctly describes Hashes data types in Perl?",
        options: ["These are simple variables. They are preceded by a dollar sign ($).","These are ordered lists of scalars that you access with a numeric index which starts with 0","These are unordered sets of key/value pairs that you access using the keys as subscripts","None of the above."],
        correct_option:"These are unordered sets of key/value pairs that you access using the keys as subscripts"
    },
    {
        question: "Which of the following statement terminates the loop statement and transfers \n execution to the start of the loop?",
        options: ["next","last","continue","redo"],
        correct_option: "continue"
    },
    {
        question: "Which of the following function deletes a file?",
        options: ["delete","unlink","seek","None of the above"],
        correct_option: "unlink"
    },
    {
        question: "Which of the following expression matches a line which begins with a?",
        options: ["/^a/","/@a/","/$a/","/~a/"],
        correct_option: "/^a/"
    },
    {
        question: "Perl code to push variable 'x' to array 'arr' is",
        options: ["push @arr ($x)","push @arr $x","push $x @arr","push @arr, $x"],
        correct_option: "push @arr, $x"
    },
    {
        question: "Which of the following data type stores associative arrays?",
        options: ["Scalar","Hash","Resource","Array"],
        correct_option: "Hash"
    },
    {
        question: "Which of the following symbol is used to denote Scalar in Perl?",
        options: ["$","#","%","^"],
        correct_option: "$"
    },
    {
        question: "'%' is used with",
        options: ["Scalar variables","Hash variables","Arrays","Subroutines"],
        correct_option: "Hash variables"
    },
    {
        question: "Which of the following symbol is used to denote Arrays?",
        options: ["#","$","@","%"],
        correct_option: "@"
    },
    {
        question: "Which one of the following is comparison operator in Perl?",
        options: ["&&","||","!=","="],
        correct_option: "!="
    },
    {
        question: "'+=' known as following operator",
        options: ["Arithmetic operator","Comparison operator","Increment/Decrement operator","Assignment operator"],
        correct_option: "Assignment operator"
    },
    {
        question: "Which of the following is correct syntax for else if statement",
        options: ["else if","elsif","elseif","elif"],
        correct_option: "elsif"
    },

    

]

export default data;