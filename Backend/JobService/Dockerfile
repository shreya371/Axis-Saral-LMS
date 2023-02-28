FROM openjdk:17
EXPOSE 9093
ADD target/jobservice.jar jobservice.jar 
ENTRYPOINT ["java","-jar","/jobservice.jar"]