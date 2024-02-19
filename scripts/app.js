// nav btn function
function scrollToSection() {
	const section = document.getElementById('ticket-section')
	section.scrollIntoView({
		behavior: 'smooth'
	})
}

const price = 550
const totalSeats = 40
let discountPrice = 0
let totalPrice = 0
let grandTotalPrice = 0

const seats = document.querySelectorAll('.seat')

let nowSeats = 0

for (let seat of seats) {
	seat.addEventListener('click', function() {
		const seatName = seat.innerText

		// appendChild ticket details
		const outerDiv = document.createElement('div');
		outerDiv.classList.add('flex', 'justify-between');
		outerDiv.setAttribute("role", "row");

		const innerDiv1 = document.createElement('div');
		innerDiv1.classList.add('text-[#03071299]');
		innerDiv1.innerText = seatName;
		innerDiv1.setAttribute("role", "cell");
		innerDiv1.setAttribute("aria-label", "Seat Name");

		const innerDiv2 = document.createElement('div');
		innerDiv2.classList.add('text-[#03071299]');
		innerDiv2.innerText = 'Economy';
		innerDiv2.setAttribute("role", "cell");
		innerDiv2.setAttribute("aria-label", "Ticket Class");

		const innerDiv3 = document.createElement('div');
		innerDiv3.classList.add('text-[#03071299]');
		innerDiv3.innerText = '550';
		innerDiv3.setAttribute("role", "cell");
		innerDiv3.setAttribute("aria-label", "Ticket Price");

		outerDiv.appendChild(innerDiv1);
		outerDiv.appendChild(innerDiv2);
		outerDiv.appendChild(innerDiv3);

		const addedSeats = document.getElementById('added-seats')
		const seatsLeft = document.getElementById('seats-left')
		const totalPriceSet = document.getElementById('total-price')
		const grandTotal = document.getElementById('grand-total')

		const ticketsDetailsContainer = document.getElementById("tickets-details-container");

		let childDivs = ticketsDetailsContainer.getElementsByTagName('div');

		const applyBtn = document.getElementById('apply-btn');

		if (nowSeats > 3) {
			for (let i = 0; i < childDivs.length; i++) {
				if (childDivs[i].isEqualNode(outerDiv)) {
					ticketsDetailsContainer.removeChild(childDivs[i]);
					nowSeats--
					totalPrice = (nowSeats * price)
					grandTotalPrice = (totalPrice - discountPrice)
					addedSeats.innerText = nowSeats
					seatsLeft.innerText = (totalSeats - nowSeats)
					totalPriceSet.innerText = totalPrice
					grandTotal.innerText = grandTotalPrice
					seat.classList.remove("bg-primaryBtnBg", "text-white")
					if (totalPrice != 2200) {
						const applyBtn = document.getElementById('apply-btn');
						applyBtn.classList.remove('bg-[#1DD100]', 'text-white');
						applyBtn.removeEventListener('click', function(e) {
						});
					}
					return;
				}
			}
			return alert("You can't add more seats!")
		}

		for (let i = 0; i < childDivs.length; i++) {
			if (childDivs[i].isEqualNode(outerDiv)) {
				ticketsDetailsContainer.removeChild(childDivs[i]);
				nowSeats--
				totalPrice = (nowSeats * price)
				grandTotalPrice = (totalPrice - discountPrice)
				addedSeats.innerText = nowSeats
				seatsLeft.innerText = (totalSeats - nowSeats)
				totalPriceSet.innerText = totalPrice
				grandTotal.innerText = grandTotalPrice
				seat.classList.remove("bg-primaryBtnBg", "text-white")
				return;
			}
		}
		seat.classList.add("bg-primaryBtnBg", "text-white")
		ticketsDetailsContainer.appendChild(outerDiv);
		nowSeats++
		totalPrice = (nowSeats * price)
		grandTotalPrice = (totalPrice - discountPrice)
		addedSeats.innerText = nowSeats
		seatsLeft.innerText = (totalSeats - nowSeats)
		totalPriceSet.innerText = totalPrice
		grandTotal.innerText = grandTotalPrice

		if (totalPrice == 2200) {
			const btnColor = applyBtn.classList.add('bg-[#1DD100]', 'text-white');
			applyBtn.addEventListener('click', function(e) {
				const inputValue = e.target.parentNode.childNodes[1].value;
				if (inputValue === 'NEW15') {
					discountPrice = totalPrice * 15 / 100;
					const grandTotalPrice = totalPrice - discountPrice;
					document.getElementById('grand-total').innerText = grandTotalPrice;
				} else if (inputValue === 'Couple 20') {
					discountPrice = totalPrice * 20 / 100;
					grandTotalPrice = totalPrice - discountPrice;
					document.getElementById('grand-total').innerText = grandTotalPrice;
				} else {
					return alert('Invalid coupon. Please provide a valid coupon.');
				}
			});
		} else {
			const applyBtn = document.getElementById('apply-btn');
			applyBtn.classList.remove('bg-[#1DD100]', 'text-white');
			applyBtn.removeEventListener('click', function(e) {
			});
		}
	})
}