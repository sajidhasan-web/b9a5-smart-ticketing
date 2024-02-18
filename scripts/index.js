// nav btn function
function scrollToSection(){
    const section = document.getElementById('ticket-section')
    section.scrollIntoView({behavior: 'smooth'})
}




const price = 550
let discountPrice = 0
let totalPrice = 0
let grandTotalPrice = 0

const seats = document.querySelectorAll('.seat')

let selectedSeats = []


for(let seat of seats){
    seat.addEventListener('click', function(){
        const seatName = seat.innerText
       
        
        if(selectedSeats.includes(seat)){
             
            const index = selectedSeats.indexOf(seat)
           
            if(index !== -1 ){
                selectedSeats.splice(index, 1)
            }
        }else{
            if(selectedSeats.length < 4){
                
                
                selectedSeats.push(seatName)
            }
            else{
                
                seat.classList.remove("bg-primaryBtnBg", "text-white")
                return alert("You can't add more seats!")
                
               
            }
        }


       


         seat.classList.add("bg-primaryBtnBg", "text-white")

        // seats lefts display
        const seatsLefts = document.getElementById('seats-left')
        const seatsLeftsText = seatsLefts.innerText
        let seatLeft = parseInt(seatsLeftsText)
        seatLeft --
        seatsLefts.innerText = seatLeft

        // added seats display
        const addedSeats = document.getElementById('added-seats')
        const addedSeatsText = addedSeats.innerText
        let  seatAdd = parseInt(addedSeatsText)
        seatAdd ++
        addedSeats.innerText = selectedSeats.length
        
       

            // appendChild ticket details
            const outerDiv = document.createElement('div')
            outerDiv.classList.add('flex', 'justify-between')
          
            const innerDiv1 = document.createElement('div')
            innerDiv1.classList.add('text-[#03071299]')
            innerDiv1.innerText = seatName
        


     
        const innerDiv2 = document.createElement('div')
        innerDiv2.classList.add('text-[#03071299]')
        innerDiv2.innerText = 'Economy'

       
        const innerDiv3 = document.createElement('div')
        innerDiv3.classList.add('text-[#03071299]')
        innerDiv3.innerText = '550'

        outerDiv.appendChild(innerDiv1)
        outerDiv.appendChild(innerDiv2)
        outerDiv.appendChild(innerDiv3)

        const ticketsDetailsContainer = document.getElementById("tickets-details-container")
        
        ticketsDetailsContainer.appendChild(outerDiv)
        
        
        // total price
 
        totalPrice = selectedSeats.length * price
        document.getElementById('total-price').innerText = totalPrice 
        

       
        if(totalPrice == 2200){
            const applyBtn = document.getElementById('apply-btn')
            const btnColor = applyBtn.classList.add('bg-[#1DD100]', 'text-white')
            applyBtn.addEventListener('click', function(e){
                const inputValue = e.target.parentNode.childNodes[1].value
                if(inputValue=== 'NEW15'){
                     discountPrice = totalPrice * 15 / 100
                     const grandTotalPrice = totalPrice - discountPrice
                    document.getElementById('grand-total').innerText = grandTotalPrice
                    inputValue = ' '
                }
                else if(inputValue=== 'Couple 20'){
                    discountPrice = totalPrice * 20 / 100
                     grandTotalPrice = totalPrice - discountPrice
                    document.getElementById('grand-total').innerText = grandTotalPrice
                    inputValue = ' '
                }
                else{
                    return alert('Invalid coupon. Please provide a valid coupon.')
                }
            })
            
            
        
        }



       



        


        



    })
}




