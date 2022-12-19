package com.fdryt.nursery.configuration;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final PasswordEncoder passwordEncoder;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf().disable()
                .authorizeHttpRequests(
                        authorize -> {
                            authorize.requestMatchers("/api/ornamental").permitAll();
                            authorize.anyRequest().authenticated();
                        }
                )
                .httpBasic(withDefaults())
                .build();
    }

    @Bean
    UserDetailsService userDetailsService() {
        UserDetails jose = User.builder()
                .username("jose")
                .password(passwordEncoder.encode("maria17"))
                .roles("USER")
                .build();

        UserDetails darleen = User.builder()
                .username("consuelo")
                .password(passwordEncoder.encode("consuelo17"))
                .roles("ADMIN")
                .build();

        return new InMemoryUserDetailsManager(jose, darleen);
    }
}
