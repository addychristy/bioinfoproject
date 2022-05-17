var data = [
    {
        question: "Mutually Exclusive events __________",
        options: ["Contain all sample points","Contain all common sample points","Does not contain any sample point","Does not contain any common sample point"],
        correct_option: "Does not contain any common sample point"
    },
    {
        question: "What would be the probability of an event ‘G’ if H denotes its complement, according to the axioms \n of probability?",
        options: ["P (G) = 1 / P (H)","P (G) = 1 – P (H)","P (G) = 1 + P (H)","P (G) = P (H)"],
        correct_option: "P (G) = 1 – P (H)"
    },
    {
        question: "A table with all possible value of a random variable and its corresponding probabilities is called ____",
        options: ["Probability Mass Function","Probability Density Function","Cumulative distribution function","Probability Distribution"],
        correct_option: "Probability Distribution"
    },
    {
        question: "A variable that can assume any value between two given points is called ___________",
        options: ["Continuous random variable","Discrete random variable","Irregular random variable","Uncertain random variable"],
        correct_option: "Continuous random variable"
    },
    {
        question: "If E(x) = 2 and E(z) = 4, then E(z – x) =?",
        options: ["2","6","0","Insufficient data"],
        correct_option: "2"
    },
    {
        question: "If E and F are two events associated with the same sample space of a random experiment then P \n (E|F) is given by _______",
        options: ["P(E∩F) / P(F), provided P(F) ≠ 0","P(E∩F) / P(F), provided P(F) = 0","P(E∩F) / P(F)","P(E∩F) / P(E)"],
        correct_option: "P(E∩F) / P(F), provided P(F) ≠ 0"
    },
    {
        question: "Given that E and F are events such that P(E) = 0.6, P(F) = 0.3 and P(E∩F) = 0.2, then P(E|F) ?",
        options: ["2/3","1/3","3/4","1/4"],
        correct_option: "2/3"
    },
    {
        question: "If P(A) = 7/11, P(B) = 6 / 11 and P(A∪B) = 8/11, then P(A|B) = ________",
        options: ["3/5","2/3","1/2","1"],
        correct_option: "1"
    },
    {
        question: "Naina receives emails that consists of 18% spam of those emails. The spam filter is 93% reliable i.e., \n 93% of the mails it marks as spam are actually a spam and 93% of spam mails are correctly labelled \n as spam. If a mail marked spam by her spam filter, determine the probability that it is really spam.",
        options: ["50%","84%","39%","63%"],
        correct_option: "50%"
    },
    {
        question: "Mangoes numbered 1 through 18 are placed in a bag for delivery. Two mangoes are drawn out of \n the bag without replacement. Find the probability such that all the mangoes have even numbers on them?",
        options: ["43.7%","34%","6.8%","9.3%"],
        correct_option: "6.8%"
    },
    {
        question: "Runs scored by batsman in 5 one day matches are 50, 70, 82, 93, and 20. The standard deviation is _____",
        options: ["25.79","25.49","25.29","25.69"],
        correct_option: "25.79"
    },
    {
        question: "Find median and mode of the messages received on 9 consecutive days 15, 11, 9, 5, 18, 4, 15, 13,17",
        options: ["13,6","13,18","18,15","15,16"],
        correct_option: "13,18"
    },
    {
        question: "If E denotes the expectation the variance of a random variable X is denoted as?",
        options: ["(E(X))^2","E(X2)-(E(X))^2","E(X2)","2E(X)"],
        correct_option: "E(X2)-(E(X))2"
    },
    {
        question: "X is a variate between 0 and 3. The value of E(X2) is ______",
        options: ["8","7","27","9"],
        correct_option: "9"
    },
    {
        question: "The expectation of a random variable X(continuous or discrete) is given by _________",
        options: ["∑xf(x), ∫xf(x)","∑x2 f(x), ∫x2 f(x)","∑f(x), ∫f(x)","∑xf(x2), ∫xf(x2)"],
        correct_option: "∑xf(x), ∫xf(x)"
    },
    {
        question: "Variance of a random variable X is given by _______",
        options: ["E(X)","E(X2)","E(X2) – (E(X))^2","(E(X))^2"],
        correct_option: "E(X2) – (E(X))^2"
    },
    {
        question: "E(X) = npq is for which distribution?",
        options: ["Bernoulli’s","Binomial","Poisson’s","Normal"],
        correct_option: "Binomial"
    },
    {
        question: "E(X) = λ is for which distribution?",
        options: ["Bernoulli’s","Binomial","Poisson’s","Normal"],
        correct_option: "Poisson’s"
    },
    {
        question: "E(X) = μ and V(X) = σ2 is for which distribution?",
        options: ["Bernoulli’s","Binomial","Poisson’s","Normal"],
        correct_option: "Normal"
    },
    {
        question: "In a Binomial Distribution, if p, q and n are probability of success, failure and number of trials \n respectively then variance is given by _______",
        options: ["np","npq","np^2q","npq^2"],
        correct_option: "npq"
    },
    {
        question: "For larger values of ‘n’, Binomial Distribution ________",
        options: ["loses its discreteness","tends to Poisson Distribution","stays as it is","gives oscillatory values"],
        correct_option: "tends to Poisson Distribution"
    },
    {
        question: "The independent variable is also called:",
        options: ["Regressor","Regressand","Predictand","Estimated"],
        correct_option: "Regressor"
    },
    {
        question: "The dependent variable is also called:",
        options: ["Regressand variable","Predictand variable","Explained variable","All of these"],
        correct_option: "All of these"
    },
    {
        question: "If one regression coefficient is greater than one, then other will be:",
        options: ["More than one","Equal to one","Less than one","Equal to minus one"],
        correct_option: "Less than one"
    },
    {
        question: "if Y= 2- 0.2X, then the value of Y intercept is equal to:",
        options: ["-0.2","2","0.2X","All of the above"],
        correct_option: "2"
    },
    {
        question: "The straight line of graph of the linear equation Y=a+bX, slope is horizontal if:",
        options: ["b=0","b!=0","b=1","a=b"],
        correct_option: "b=0"
    },
    {
        question: "A statement made about a population for testing purpose is called?",
        options: ["Statistic","Hypothesis","Level of Significance","Test-Statistic"],
        correct_option: "Hypothesis"
    },
    {
        question: "If the assumed hypothesis is tested for rejection considering it to be true is called?",
        options: ["Null Hypothesis","Statistical Hypothesis","Simple Hypothesis","Composite Hypothesis"],
        correct_option: "Null Hypothesis"
    },
    {
        question: "A statement whose validity is tested on the basis of a sample is called?",
        options: ["Null Hypothesis","Statistical Hypothesis","Simple Hypothesis","Composite Hypothesis"],
        correct_option: "Statistical Hypothesis"
    },
    {
        question: "The rejection probability of Null Hypothesis when it is true is called as?",
        options: ["Level of Confidence","Level of Significance","Level of Margin","Level of Rejection"],
        correct_option: "Level of Significance"
    },
    {
        question: "The point where the Null Hypothesis gets rejected is called as?",
        options: ["Significant Value","Rejection Value","Acceptance Value","Critical Value"],
        correct_option: "Critical Value"
    },
    {
        question: "Which of the following is defined as the rule or formula to test a Null Hypothesis?",
        options: ["Test statistic","Population statistic","Variance statistic","Null statistic"],
        correct_option: "Test statistic"
    },
    {
        question: "Alternative Hypothesis is also called as?",
        options: ["Composite hypothesis","Research Hypothesis","Simple Hypothesis","Null Hypothesis"],
        correct_option: "Research Hypothesis"
    },
    {
        question: "Which of the following is finally produced by Hierarchical Clustering?",
        options: ["final estimate of cluster centroids","tree showing how close things are to each other","assignment of each point to clusters","all of the mentioned"],
        correct_option: "tree showing how close things are to each other"
    },
    {
        question: "Which of the following is required by K-means clustering?",
        options: ["defined distance metric","number of clusters","initial guess as to cluster centroids","all of the mentioned"],
        correct_option: "all of the mentioned"
    },
    {
        question: "Which of the following combination is incorrect?",
        options: ["Continuous – euclidean distance","Continuous – correlation similarity","Binary – manhattan distance","None of the mentioned"],
        correct_option: "None of the mentioned"
    },
    {
        question: "Which of the following function is used for k-means clustering?",
        options: ["k-means","k-mode","heatmap","none of the mentioned"],
        correct_option: "k-means"
    },
    {
        question: "Which of the following holds true for a vector quantity?",
        options: ["It has only magnitude","It has only direction","A vector has both direction and magnitude","A vector can never be negative"],
        correct_option: "A vector has both direction and magnitude"
    },
    {
        question: "Cross product is a mathematical operation performed between _____________",
        options: ["2 scalar numbers","a scalar and a vector","2 vectors","any 2 numbers"],
        correct_option: "2 vectors"
    },
    {
        question: "Cross product is also known as?",
        options: ["scalar product","vector product","dot product","multiplication"],
        correct_option: "vector product"
    },
    {
        question: "Cross product of two vectors can be used to find?",
        options: ["area of rectangle","area of square","area of parallelogram","perimeter of rectangle"],
        correct_option: "area of parallelogram"
    },
    {
        question: "The resultant vector from the cross product of two vectors is ___________",
        options: ["perpendicular to any one of the two vectors involved in cross product","perpendicular to the plane containing both vectors","parallel to to any one of the two vectors involved in cross product","parallel to the plane containing both vectors"],
        correct_option: "perpendicular to the plane containing both vectors"
    },
    {
        question: "What will be the cross product of the vectors 2i + 3j + k and 3i + 2j + k?",
        options: ["i + 2j + k","2i + 3j + k","i + j – 5k","2i – j – 5k"],
        correct_option: "i + j – 5k"
    },
    {
        question: "If rank(A)=2 and Rank(B)=3 then Rank(AB) is:",
        options: ["6","5","3","Data inadequate"],
        correct_option: "Data inadequate"
    },
    {
        question: "If A is m x n matrix such that AB & BA both are defined, then B is a matrix of order",
        options: ["n x n","m x m","m x n","n x m"],
        correct_option: "n x m"
    },
    {
        question: "Multiplication of real valued square matrices of same dimension is",
        options: ["Associative","Commutative","Always positive definite","not always possible to commute"],
        correct_option: "Associative"
    },
    {
        question: "The eigen values of a Hermitian matrix are",
        options: ["complex","purely imaginary","real","none of the above"],
        correct_option: "real"
    },
    {
        question: "Eigen values of a real symmetric matrix are always",
        options: ["positive","negative","real","complex"],
        correct_option: "real"
    },
    {
        question: "Number of different 2x2 symmetric matrices with elements being either 0 or 1 is",
        options: ["4","8","16","none of these"],
        correct_option: "8"
    },
    {
        question: "A square matrix is the sum of _____ and _____",
        options: ["assymetrical matrix, symmetrical matrix","skew symmetrical, skew symmetrical matrix","symmetrical matrix, skew symmetrical matrix","none of these"],
        correct_option: "symmetrical matrix, skew symmetrical matrix"
    },
    {
        question: "If A is a skew symmetric matrix, then A^t" ,
        options: ["Diagonal matrix","A","-A","0"],
        correct_option: "-A"
    },
    {
        question: "Which of the following gives the right inequality for AM, GM, HM?",
        options: ["AM>=HM>=GM","GM>=AM>=HM","AM>=GM>=HM","GM>=HM>=AM"],
        correct_option: "AM>=GM>=HM"
    },
    {
        question: "For two number a,b HM between them is given by?",
        options: ["(2b+2a )/3b","2ab/(a+b)","(a+b)/2ab","2b/(a+b)"],
        correct_option: "2ab/(a+b)"
    },
    {
        question: "If a = 10 and d = 10, then first four terms will be:",
        options: ["10, 30, 50, 60","10, 20, 30, 40","10, 15, 20, 25","10, 18, 20, 30"],
        correct_option: "10, 20, 30, 40"
    },
    {
        question: "The first term and common difference for the A.P. 3, 1, -1, -3 is:",
        options: ["1 and 3","-1 and 3","3 and -2","2 and 3"],
        correct_option: "3 and -2"
    },
    {
        question: "30th term of the A.P: 10, 7, 4, …, is",
        options: ["97","77","-77","-87"],
        correct_option: "-77"
    },
    {
        question: "In boolean algebra, the OR operation is performed by which properties?",
        options: ["Associative properties","Commutative properties","Distributive properties","All of the Mentioned"],
        correct_option: "All of the Mentioned"
    },
    {
        question: "According to boolean law: A + 1 = ?",
        options: ["1","A","0","A'"],
        correct_option: "1"
    },
    {
        question: "The involution of A is equal to _________",
        options: ["A","A'","1","0"],
        correct_option: "A"
    },
    {
        question: "A(A + B) = ?",
        options: ["AB","1","(1+AB)","A"],
        correct_option: "A"
    },


]

export default data;