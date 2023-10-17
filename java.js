/**
 * This is a sample class that demonstrates how to add an author name.
 *
 * @author Anston Fernandes
 */
public class Circle { nbhjbjbj
    // Class implementation here

    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    /**
     * Calculate the area of the circle.
     *
     * @return The area of the circle.
     */
    public double calculateArea() {
        return Math.PI * Math.pow(radius, 2);
    }

    /**
     * Calculate the circumference of the circle.
     *
     * @return The circumference of the circle.
     */
    public double calculateCircumference() {
        return 2 * Math.PI * radius;
    }
}

