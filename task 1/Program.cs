int alisveris_meblegi = 2000;
int endirim1 = (alisveris_meblegi * 95) / 100;
int endirim2 = (alisveris_meblegi * 92) / 100;
int endirim3 = (alisveris_meblegi * 90) / 100;
if (alisveris_meblegi < 100)
{
    Console.WriteLine(endirim1);
}
else if (alisveris_meblegi >= 100 && alisveris_meblegi <= 1000)
{
    Console.WriteLine(endirim2);
}
else
{
    Console.WriteLine(endirim3);
}