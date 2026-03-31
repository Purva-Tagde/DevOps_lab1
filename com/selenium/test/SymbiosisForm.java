package com.selenium.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SymbiosisForm {

    public static void main(String[] args) throws InterruptedException {

        // Launch browser
        WebDriver driver = new ChromeDriver();

        // Open your HTML file (CHANGE PATH if needed)
        driver.get("C:\SymbiosisForm\index.html");
        driver.manage().window().maximize();

        // Fill form
        driver.findElement(By.id("name")).sendKeys("Purva");
        driver.findElement(By.id("email")).sendKeys("purva@gmail.com");
        driver.findElement(By.id("mobile")).sendKeys("9876543210");
        driver.findElement(By.id("password")).sendKeys("123456");
        driver.findElement(By.id("confirmPassword")).sendKeys("123456");

        driver.findElement(By.id("female")).click();
        driver.findElement(By.id("department")).sendKeys("IT");
        driver.findElement(By.id("course")).sendKeys("B.Tech");

        driver.findElement(By.id("feedback"))
              .sendKeys("This is a good feedback form and it works properly");

        // Click submit
        driver.findElement(By.xpath("//button[@type='submit']")).click();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close browser
        driver.quit();

        System.out.println("Form submitted successfully");
    }
}