import org.example.Main;
import org.example.Main.*;
import org.junit.jupiter.api.*;


public class Main1
{
        @Test
        void addTest(int x,int y)
        {
                Assertions.assertEquals(1100, Main.add(1000,100));
        }
}
