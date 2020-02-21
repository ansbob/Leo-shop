new Vue ({
	el: '#app',
	data: {
		buyCount: 0,
		buyFirst: 0,
		buySecond: 0,
		buyThird: 0,
		buyFourth: 0,
		buyFifth: 0,
		buySixth: 0,
		buySeventh: 0,
		buyEighth: 0,
		buyNinth: 0
	},
	methods: {
		cancel: function (event) {
			var id = event.target.getAttribute("id")
			switch (id) {
				case "cancel-first":
					this.buyFirst--
					$("span#first-product-cast").replaceWith("<span id=\"first-product-cast\">(" + this.buyFirst + ")</span>")
					break
				case "cancel-second":
					this.buySecond--
					$("span#second-product-cast").replaceWith("<span id=\"second-product-cast\">(" + this.buySecond + ")</span>")
					break
				case "cancel-third":
					this.buyThird--
					$("span#third-product-cast").replaceWith("<span id=\"third-product-cast\">(" + this.buyThird + ")</span>")
					break
				case "cancel-fourth":
					this.buyFourth--
					$("span#fourth-product-cast").replaceWith("<span id=\"fourth-product-cast\">(" + this.buyFourth + ")</span>")
					break
				case "cancel-fifth":
					this.buyFifth--
					$("span#fifth-product-cast").replaceWith("<span id=\"fifth-product-cast\">(" + this.buyFifth + ")</span>")
					break
				case "cancel-sixth":
					this.buySixth--
					$("span#sixth-product-cast").replaceWith("<span id=\"sixth-product-cast\">(" + this.buySixth + ")</span>")
					break
				case "cancel-seventh":
					this.buySeventh--
					$("span#seventh-product-cast").replaceWith("<span id=\"seventh-product-cast\">(" + this.buySeventh + ")</span>")
					break
				case "cancel-eighth":
					this.buyEighth--
					$("span#eighth-product-cast").replaceWith("<span id=\"eighth-product-cast\">(" + this.buyEighth + ")</span>")
					break
				case "cancel-ninth":
					this.buyNinth--
					$("span#ninth-product-cast").replaceWith("<span id=\"ninth-product-cast\">(" + this.buyNinth + ")</span>")
					break
			}
			this.buyCount--
			$("a#cart-count").replaceWith("<a data-toggle=\"modal\" data-target=\"#cartModal\" @click=\"openCart\" id=\"cart-count\" href=\"#\">CART("+ this.buyCount + ")</a>");
		},
		buy: function (event) {
			var cl = event.target.getAttribute("class");
			
			if (cl === "buyFirst btn btn-success" || cl === "buyFirst") {
				this.buyFirst++
				$("span#first-product-cast").replaceWith("<span id=\"first-product-cast\">(" + this.buyFirst + ")</span>")
			} else if (cl === "buySecond btn btn-success" || cl === "buySecond") {
				this.buySecond++
				$("span#second-product-cast").replaceWith("<span id=\"second-product-cast\">(" + this.buySecond + ")</span>")
			} else if (cl === "buyThird btn btn-success" || cl === "buyThird") {
				this.buyThird++
				$("span#third-product-cast").replaceWith("<span id=\"third-product-cast\">(" + this.buyThird + ")</span>")
			} else if (cl === "buyFourth btn btn-success" || cl === "buyFourth") {
				this.buyFourth++
				$("span#fourth-product-cast").replaceWith("<span id=\"fourth-product-cast\">(" + this.buyFourth + ")</span>")
			} else if (cl === "buyFifth btn btn-success" || cl === "buyFifth") {
				this.buyFifth++
				$("span#fifth-product-cast").replaceWith("<span id=\"fifth-product-cast\">(" + this.buyFifth + ")</span>")
			} else if (cl === "buySixth btn btn-success" || cl === "buySixth") {
				this.buySixth++
				$("span#sixth-product-cast").replaceWith("<span id=\"sixth-product-cast\">(" + this.buySixth + ")</span>")
			} else if (cl === "buySeventh btn btn-success" || cl === "buySeventh") {
				this.buySeventh++
				$("span#seventh-product-cast").replaceWith("<span id=\"seventh-product-cast\">(" + this.buySeventh + ")</span>")
			} else if (cl === "buyEighth btn btn-success" || cl === "buyEighth") {
				this.buyEighth++
				$("span#eighth-product-cast").replaceWith("<span id=\"eighth-product-cast\">(" + this.buyEighth + ")</span>")
			} else if (cl === "buyNinth btn btn-success" || cl === "buyNinth") {
				this.buyNinth++
				$("span#ninth-product-cast").replaceWith("<span id=\"ninth-product-cast\">(" + this.buyNinth + ")</span>")
			}

			this.buyCount++
			$("a#cart-count").replaceWith("<a data-toggle=\"modal\" data-target=\"#cartModal\" @click=\"openCart\" id=\"cart-count\" href=\"#\">CART("+ this.buyCount + ")</a>");			
		}
	}
})