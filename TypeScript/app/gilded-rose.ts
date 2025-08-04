export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case 'Sulfuras, Hand of Ragnaros':
          this.ragnarosHand(i);
          break;
        case 'Aged Brie':
          this.agedBrie(i);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.backStage(i);
          break;
        default: {
          this.default(i);
        }
      }
    }

    return this.items;
  }

  private agedBrie(i: number) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1
    }

    this.items[i].sellIn = this.items[i].sellIn - 1;

    if (this.items[i].sellIn < 0) {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1
      }
    }
  }


  private default(i: number) {
    if (this.items[i].quality > 0) {
      this.items[i].quality = this.items[i].quality - 1
    }
    this.items[i].sellIn = this.items[i].sellIn - 1;
    if (this.items[i].sellIn < 0) {
      if (this.items[i].quality > 0) {
        this.items[i].quality = this.items[i].quality - 1
      }
    }
  }

  private ragnarosHand(i: number) {
  }

  private backStage(i: number) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1
      if (this.items[i].sellIn < 11) {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
        }
      }
      if (this.items[i].sellIn < 6) {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
        }
      }
    }
    this.items[i].sellIn = this.items[i].sellIn - 1;
    if (this.items[i].sellIn < 0) {
      this.items[i].quality = this.items[i].quality - this.items[i].quality
    }
  }

}
