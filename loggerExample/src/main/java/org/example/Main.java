package org.example;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    private static final Logger log=LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        System.out.println("Hello and welcome!");

        log.info("Application started");
try
{
    int a=10/0;
}
catch (Exception e)
{
    log.error("error",e);

}
        log.info("Application ended");



    }
}