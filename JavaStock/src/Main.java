import com.eli.Stock;
import com.sun.jdi.connect.Connector;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by localadmin on 7/28/16.
 */
public class Main {
    public static void main(String[] args) {
        ArrayList<Stock> stocks = new ArrayList<>();
        Stock s1 = new Stock("ALL", 68.0f, 100);
        System.out.println("s1: " + s1 );

        Stock s2 = new Stock("GOOG", 738.0f, 50);
        Stock s3 = new Stock("AAPL", 98.0f, 25);
        stocks.add(s1);
        stocks.add(s2);
        stocks.add(s3);
        Float[] amounts1 =
                stocks.stream().map(stock -> stock.getShares() * stock.getPrice())
                        .toArray(size -> new Float[size]);

        List<Float> amounts2 =
                stocks.stream().map(stock -> stock.getShares() * stock.getPrice())
                        .collect(Collectors.toList());
        ArrayList<Float> amounts3 =
                stocks.stream().map(stock -> stock.getShares() * stock.getPrice())
                        .collect(Collectors.toCollection(ArrayList::new));  // (ClassName::InstanceMethodName) is how you call an instance method on a class.
        Stock[] stocks2 = stocks.stream().filter(stock -> stock.getSymbol() == "ALL")
                        .toArray(Stock[]::new);
        float position = stocks.stream().parallel().reduce(0f, (acc, stock) -> {
            System.out.println("Stock is " + stock);
            return acc + (stock.getPrice() * stock.getShares());
        }, (total, value) -> {
            System.out.println("Total is " + total + " value is: " + value);
            return total + value;
//            return 0f;
        });
    }


}
